import { Action } from '@ngrx/store';

export const GYROSCOPE_UPDATE_MOTION = 'GYROSCOPE_UPDATE_MOTION';
export const GYROSCOPE_UPDATE_ORIENTATION = 'GYROSCOPE_UPDATE_ORIENTATION';

export class UpdateMotion implements Action {
    readonly type = GYROSCOPE_UPDATE_MOTION;
    constructor(public payload: any) { }
}

export class UpdateOrientation implements Action {
    readonly type = GYROSCOPE_UPDATE_ORIENTATION;
    constructor(public payload: any) { }
}

export type GyroscopeActions =
    UpdateMotion |
    UpdateOrientation;