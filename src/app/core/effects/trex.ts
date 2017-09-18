import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TRexService } from '../services/TRexService';
import * as trexReducers from '../reducers/joystick';
import * as trex from '../actions/trex';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class TRexEffects {

    constructor(
        private store: Store<trexReducers.State>,
        private action$: Actions,
        private tRexService: TRexService
    ) { }

    @Effect()
    updateMotors$ = this.action$
        .ofType<trex.UpdateMotors>(trex.TREX_UPDATE_MOTORS)
        .do((action) => this.tRexService.motors(action.payload.lmSpeed, action.payload.rmSpeed))
        .filter(() => null);

    @Effect()
    updateServos$ = this.action$
        .ofType<trex.UpdateServos>(trex.TREX_UPDATE_SERVOS)
        .do((action) => this.store.dispatch(
            new trex.UpdateMotors({ lmSpeed: action.payload.servo1, rmSpeed: action.payload.servo2 })
        ))
        .filter(() => null);

}