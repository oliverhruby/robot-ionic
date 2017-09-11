import { Component } from '@angular/core';
import { Widget } from '../../widget/widget';
import { Store } from '@ngrx/store';
import * as gamepad from '../../actions/gamepad';
import * as gamepadReducers from '../../reducers/gamepad';

/**
 * Gamepad controller visualization
 */
@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.html'
})
export class GamepadComponent extends Widget {

  gamepads: Gamepad[]

  constructor(
    private store: Store<gamepadReducers.State>,
  ) {
    super();
    this.gamepads = navigator.getGamepads();
    this.store.dispatch(new gamepad.Connect({}));
  }

}
