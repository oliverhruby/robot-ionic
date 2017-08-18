import { Action } from '@ngrx/store';
import * as trex from '../actions/trex';

export interface State {
    rmSpeed: number;
    lmSpeed: number;
    servo1: number;
    servo2: number;
    servo3: number;
    servo4: number;
    servo5: number;
    servo6: number;
}

const initialState = {
    rmSpeed: 0,
    lmSpeed: 0,
    servo1: 0,
    servo2: 0,
    servo3: 0,
    servo4: 0,
    servo5: 0,
    servo6: 0
}

export function reducer(state = initialState, action: trex.TRexActions): State {
    switch (action.type) {
        case trex.TREX_UPDATE_MOTORS:
            return Object.assign({}, state, action.payload);
        case trex.TREX_UPDATE_SERVOS:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}