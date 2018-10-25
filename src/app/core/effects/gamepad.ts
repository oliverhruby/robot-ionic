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

    /**
     * Tracks the software joystick based on the gamepad buttons
     */
    @Effect()
    updateJoystick2$ = this.action$
        .ofType<gamepad.ButtonDown>(gamepad.GAMEPAD_BUTTON_DOWN)
        .do((action) => {
            if (action.payload === 0) {
                this.store.dispatch(
                    new joystick.Update({ x: 0, y: 1 })
                );
            } else if (action.payload === 1) {
                this.store.dispatch(
                    new joystick.Update({ x: 0, y: -1 })
                );
            } else if (action.payload === 2) {
                this.store.dispatch(
                    new joystick.Update({ x: -1, y: 0 })
                );
            } else if (action.payload === 3) {
                this.store.dispatch(
                    new joystick.Update({ x: 1, y: 0 })
                );
            }
        })
        .filter(() => null);

    /**
     * Tracks the software joystick based on the gamepad buttons
     */
    @Effect()
    updateJoystick3$ = this.action$
        .ofType<gamepad.ButtonDown>(gamepad.GAMEPAD_BUTTON_UP)
        .do((action) => {
            this.store.dispatch(
                new joystick.Update({ x: 0, y: 0 })
            );
        })
        .filter(() => null);

}