import { Action, ActionReducer } from '@ngrx/store';

export const GAMEPAD_BUTTON_DOWN = 'GAMEPAD_BUTTON_DOWN';
export const GAMEPAD_BUTTON_UP = 'GAMEPAD_BUTTON_UP';
export const GAMEPAD_CONNECT = 'GAMEPAD_CONNECT';
export const GAMEPAD_DISCONNECT = 'GAMEPAD_DISCONNECT';
export const GAMEPAD_UPDATE_LS = 'GAMEPAD_UPDATE_LS';
export const GAMEPAD_UPDATE_RS = 'GAMEPAD_UPDATE_RS';

export interface State {
  index: number;
  timestamp: number;
  connected: boolean;
  ls: any;
  rs: any;
  buttons: any;
};

export const initialState: State = {
  index: null,
  timestamp: null,
  connected: null,
  ls: null,
  rs: null,
  buttons: null
};

export class GamepadAction implements Action {
    readonly type: string;
    constructor(public payload: any) { }
}

export function reducer(state = initialState, action: GamepadAction): State {
  switch (action.type) {
    case GAMEPAD_BUTTON_DOWN:
      state.buttons = action.payload;
      return state;
    case GAMEPAD_BUTTON_UP:
      state.buttons = action.payload;
      return state;
    case GAMEPAD_CONNECT:
      state.connected = true;
      return state;
    case GAMEPAD_DISCONNECT:
      state.connected = false;
      return state;
    case GAMEPAD_UPDATE_LS:
      state.ls = action.payload;
      return state;
    case GAMEPAD_UPDATE_RS:
      state.rs = action.payload;
      return state;
    default:
      return state;
  }
};
