import { Action, ActionReducer } from '@ngrx/store';
import * as joystick from '../actions/joystick';

export interface State {
  x: number;
  y: number;
};

export const initialState: State = {
  x: 0,
  y: 0
};

export function reducer(state = initialState, action: joystick.JoystickActions): State {
  switch (action.type) {
    case joystick.JOYSTICK_UPDATE:
      state.x = action.payload.x;
      state.y = action.payload.y;
      return state;
    default:
      return state;
  }
};
