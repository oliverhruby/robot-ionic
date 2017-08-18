import { Component, OnInit } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import  * as fromTrexStatus from '../../reducers/trex-status';
import { Widget } from '../../widget/widget';

@Component({
  selector: 'app-trex-status',
  templateUrl: './trex-status.html'
})
export class TRexStatusComponent extends Widget implements OnInit {

  status: Observable<fromTrexStatus.State>;

  constructor(
    private store: Store<fromTrexStatus.State>
  ) {
    super();
    this.title = "TRex Status";
    this.status = this.store.select(createFeatureSelector<fromTrexStatus.State>('trexStatus'));
  }

  ngOnInit() {
  }

}
