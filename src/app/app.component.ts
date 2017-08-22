import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ListPage } from '../pages/list/list';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make DashboardPage the root (or first) page
  rootPage = DashboardPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private androidFullScreen: AndroidFullScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Camera', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.androidFullScreen.isImmersiveModeSupported()
        .then(() => this.androidFullScreen.immersiveMode())
        .catch((error: any) => console.log(error));
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
