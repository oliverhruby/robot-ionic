import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Widget } from '../../widget/widget';

/**
 * Compass indicator
 */
@Component({
  selector: 'app-compass',
  templateUrl: './compass.html'
})
export class CompassComponent extends Widget {

  heading: number = 20;

  constructor(
  ) {
    super();
  }

}
