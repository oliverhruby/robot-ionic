import { Component } from '@angular/core';
import { Widget } from '../../widget/widget';
import { Store, createFeatureSelector } from '@ngrx/store';
import * as gamepadReducers from '../../reducers/gamepad';
import { Observable } from 'rxjs/Observable';

/**
 * Gamepad controller visualization
 */
@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.html'
})
export class GamepadComponent extends Widget {

  state$: Observable<gamepadReducers.State>;

  constructor(
    private store: Store<gamepadReducers.State>
  ) {
    super();
    this.state$ = this.store.select(createFeatureSelector<gamepadReducers.State>('gamepad'));
  }

}
