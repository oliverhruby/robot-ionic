import { Action } from '@ngrx/store';

export const TREX_UPDATE_MOTORS = '[TRex] Update Motors';
export const TREX_UPDATE_SERVOS = '[TRex] Update Servos';
export const TREX_UPDATE_STATUS = '[TRex] Update Status';

export class UpdateMotors implements Action {
  readonly type = TREX_UPDATE_MOTORS;
  constructor(public payload: any) {}
}

export class UpdateServos implements Action {
  readonly type = TREX_UPDATE_SERVOS;
  constructor(public payload: any) {}
}

export class UpdateStatus implements Action {
  readonly type = TREX_UPDATE_STATUS;
  constructor(public payload: any) {}
}

export type TRexActions =
    UpdateMotors |
    UpdateServos |
    UpdateStatus;