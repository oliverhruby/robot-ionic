import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TRexService } from '../services/trex.service';
import * as trex from '../actions/trex';

@Injectable()
export class TRexEffects {

    constructor(
        private actions$: Actions,
        private tRexService: TRexService
    ) { }

    @Effect() example$ = this.actions$.ofType(trex.TREX_UPDATE_MOTORS)
        .map(() => console.log("ACTION!!!"));
}