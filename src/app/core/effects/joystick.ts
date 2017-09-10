import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as trex from '../actions/trex';
import * as joystick from '../actions/joystick';
import * as joystickReducers from '../reducers/joystick';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class JoystickEffects {

    constructor(
        private store: Store<joystickReducers.State>,
        private action$: Actions
    ) { }

    @Effect()
    updateMotors$ = this.action$
        .ofType<joystick.Update>(joystick.JOYSTICK_UPDATE)
        .do((action) => this.store.dispatch(
            new trex.UpdateMotors({
                lmSpeed: action.payload.x * 100,
                rmSpeed: action.payload.y * 100
            })
        ))
        .filter(() => null);
}