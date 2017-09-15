import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import * as gyroscopeReducer from '../reducers/gyroscope';
import * as gyroscope from '../actions/gyroscope';

/**
 * This service provides the access to gyroscopic sensors
 */
@Injectable()
export class GyroscopeService {

  constructor(
    private zone: NgZone,
    private store: Store<gyroscopeReducer.State>
  ) {
    let me = this;
      window.ondeviceorientation = function (data) {
      me.zone.run(() => me.store.dispatch(new gyroscope.UpdateOrientation(data)));
    };
    window.ondevicemotion = function (data) {
      me.zone.run(() => me.store.dispatch(new gyroscope.UpdateMotion(data)));
    };

  }

}
