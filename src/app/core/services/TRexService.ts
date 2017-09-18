import { Store } from '@ngrx/store';
import * as trexCommand from '../reducers/trex-command';
import * as fromTrex from '../../core/actions/trex';
import { Injectable } from '@angular/core';

@Injectable()
export class TRexService {

  private ws: WebSocket;

  constructor(
    private store: Store<trexCommand.State>
  ) {
    this.ws = new WebSocket("ws://192.168.0.109:3000");
    let me = this;
    this.ws.onmessage = function (event) {
      let data = JSON.parse(event.data);
      me.store.dispatch(new fromTrex.UpdateStatus(data));
    };
  }

  motors(lmSpeed: number, rmSpeed: number) {
    this.ws.send(JSON.stringify({ action: 'motors', lmSpeed: lmSpeed, rmSpeed: rmSpeed }));
  }

  photo() {
    this.ws.send(JSON.stringify({ action: 'photo' }));
  }

  status() {
    this.ws.send(JSON.stringify({ action: 'status' }));
  }

  talk(text: string) {
    this.ws.send(JSON.stringify({ action: 'talk', text: text }));
  }

}
