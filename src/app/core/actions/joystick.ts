import { Action } from '@ngrx/store';

export const JOYSTICK_UPDATE = 'JOYSTICK_UPDATE';

export class Update implements Action {
    readonly type = JOYSTICK_UPDATE;
    constructor(public payload: any) { }
}

export type JoystickActions =
    Update;