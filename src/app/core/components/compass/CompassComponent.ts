import { Component } from '@angular/core';
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
