import { Component } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Widget } from '../../widget/widget';
// import { State } from 'app/reducers';
// import { INCREMENT } from 'app/reducers/counter';

/**
 * This component shows the complete state information.
 */
@Component({
  selector: 'app-state',
  templateUrl: './state.html'
})
export class StateComponent extends Widget {

  public state: any;

  constructor(private store: Store<any>) {
    super();
    this.title = 'Application State';
    this.store.subscribe((data) => this.state = JSON.stringify(data, undefined, 2));
  }

}
