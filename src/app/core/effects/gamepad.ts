import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
//import * as trex from '../actions/trex';
import * as gamepad from '../actions/gamepad';
import * as joystick from '../actions/joystick';
import * as gamepadReducers from '../reducers/gamepad';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class GamepadEffects {

    constructor(
        private store: Store<gamepadReducers.State>,
        private action$: Actions
    ) { }

    /**
     * Tracks the software joystick position based on gamepad left stick
     */
    @Effect()
    updateJoystick$ = this.action$
        .ofType<gamepad.UpdateLS>(gamepad.GAMEPAD_UPDATE_LS)
        .do((action) => {
            try {
                if (Math.abs(action.payload.x) < 0.1 && Math.abs(action.payload.y) < 0.1) {
                    this.store.dispatch(
                        new joystick.Update({ x: 0, y: 0 })
                    );
                } else {
                    this.store.dispatch(
                        new joystick.Update({ x: action.payload.x, y: -action.payload.y })
                    );
                }
            } catch (ex) { }
        })
        .filter(() => null);

}