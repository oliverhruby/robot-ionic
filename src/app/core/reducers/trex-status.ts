import { Action } from '@ngrx/store';
import * as trex from '../actions/trex';

export interface State {
    error: number;
    voltage: number;
    rmCurrent: number;
    lmCurrent: number;
    accX: number;
    accY: number;
    accZ: number;
    impactX: number;
    impactY: number;
    impactZ: number;
}

const initialState = {
    error: 0,
    voltage: 0,
    rmCurrent: 0,
    lmCurrent: 0,
    accX: 0,
    accY: 0,
    accZ: 0,
    impactX: 0,
    impactY: 0,
    impactZ: 0
}

export function reducer(state: State = initialState, action: trex.TRexActions): State {
    switch (action.type) {
        case trex.TREX_UPDATE_STATUS:
            state = action.payload;
            return state;
        default:
            return state;
    }
}