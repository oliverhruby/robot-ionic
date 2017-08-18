import { Action } from '@ngrx/store';

export const GYROSCOPE_UPDATE = 'GYROSCOPE_UPDATE';

export interface State {
    x: number;
    y: number;
    z: number;
}

export class GyroscopeAction implements Action {
    readonly type = GYROSCOPE_UPDATE;
    constructor(public status: State) { }
}

export function reducer(state = { x: 0, y: 0, z: 0 }, action: GyroscopeAction): State {
    switch (action.type) {
        case GYROSCOPE_UPDATE:
            return action.status
        default:
            return state;
    }
}