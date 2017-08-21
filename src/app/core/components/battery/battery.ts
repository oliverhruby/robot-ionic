import { Component } from '@angular/core';
import { Widget } from '../../widget/widget';

/**
 * Visualizes current state of the battery and charging
 */
@Component({
  selector: 'app-battery',
  templateUrl: './battery.html'
})
export class BatteryComponent extends Widget {

  voltage: number = 0;
  level: number = 0;

  constructor(
  ) {
    super();
    this.title = 'Battery Status';
  }

}
