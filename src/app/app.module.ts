import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { BLE } from '@ionic-native/ble';
import { DeviceMotion } from '@ionic-native/device-motion';
import { DeviceOrientation } from '@ionic-native/device-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { reducers, metaReducers } from './reducers';
import { reducers } from './reducers';
import { CoreModule } from './core/core.module';

import { TRexEffects } from './core/effects/trex';
import { JoystickEffects } from './core/effects/joystick';


@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    //StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot(reducers),

    EffectsModule.forRoot([
      JoystickEffects,
      TRexEffects
    ]),
    
    CoreModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    AndroidFullScreen,
    BLE,
    DeviceMotion,
    DeviceOrientation,
    SplashScreen,
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
