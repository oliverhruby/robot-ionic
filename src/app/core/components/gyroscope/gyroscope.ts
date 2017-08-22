import { Component } from '@angular/core';
import { Widget } from '../../widget/widget';
import * as gyroscope from '../../actions/gyroscope';
import * as gyroscopeReducer from '../../reducers/gyroscope';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

import { Platform } from "ionic-angular";

/**
 * Visualizes the gyroscopic sensor measures
 */
@Component({
  selector: 'app-gyroscope',
  templateUrl: './gyroscope.html'
})
export class GyroscopeComponent extends Widget {

  state: Observable<gyroscopeReducer.State>

  constructor(
    private platform: Platform,
    private store: Store<any>,
    private deviceOrientation: DeviceOrientation,
    private deviceMotion: DeviceMotion
  ) {
    super();
    this.title = 'Application State';
    this.state = this.store.select('gyroscope');

    this.platform.ready().then(() => {
      this.deviceOrientation.getCurrentHeading().then(
        (data: DeviceOrientationCompassHeading) =>
          this.store.dispatch(
            new gyroscope.UpdateOrientation({ x: data.magneticHeading, y: 0, z: 0 })
          ),
        (error: any) =>
          console.error(JSON.stringify(error))
      );

      this.deviceMotion.getCurrentAcceleration().then(
        (data: DeviceMotionAccelerationData) =>
          this.store.dispatch(
            new gyroscope.UpdateOrientation({ x: data.x, y: data.y, z: data.z })
          ),
        (error: any) =>
          console.error(JSON.stringify(error))
      );

    });
  }

}
