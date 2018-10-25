import * as gamepad from '../actions/gamepad';

export interface State {
  index: number;
  timestamp: number;
  connected: boolean;
  ls: any;
  rs: any;
  buttons: any;
  gamepad: any;
};

export const initialState: State = {
  gamepad: null,
  index: null,
  timestamp: null,
  connected: null,
  ls: null,
  rs: null,
  buttons: null
};

export function reducer(state = initialState, action: gamepad.GamepadActions): State {
  switch (action.type) {
    case gamepad.GAMEPAD_BUTTON_DOWN:
      state.buttons = action.payload;
      return state;
    case gamepad.GAMEPAD_BUTTON_UP:
      state.buttons = 0;
      return state;
    case gamepad.GAMEPAD_CONNECT:
      state.connected = true;
      state.gamepad = action.payload;
      return state;
    case gamepad.GAMEPAD_DISCONNECT:
      state.connected = false;
      return state;
    case gamepad.GAMEPAD_UPDATE_LS:
       state.ls = action.payload;
       return state;
    case gamepad.GAMEPAD_UPDATE_RS:
       state.rs = action.payload;
       return state;
    default:
      return state;
  }
};
