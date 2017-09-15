import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TRexService } from '../services/TRexService';
import * as trex from '../actions/trex';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class TRexEffects {

    constructor(
        private action$: Actions,
        private tRexService: TRexService
    ) { }

    @Effect()
    updateMotors$ = this.action$
        .ofType<trex.UpdateMotors>(trex.TREX_UPDATE_MOTORS)
        .do((action) => this.tRexService.motors(action.payload.lmSpeed, action.payload.rmSpeed))
        .filter(() => null);
}