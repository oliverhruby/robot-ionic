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

  /**
   * Translates the joystick position to differencial
   * motor speed values
   * @param x Joystick x position (-128..+127)
   * @param y Joystick y position (-128..+127)
   * @param threshold The threshold at which the pivot action starts
   * This threshold is measured in units on the Y-axis
   * away from the X-axis (Y=0). A greater value will assign
   * more of the joystick's range to pivot actions.
   *      Allowable range: (0..+127)  Joystick y position (-128..+127)
   */
  // translate(x: number, y: number, threshold: number = 32.0) {
  //   // OUTPUTS
  //   let nMotMixL: number;           // Motor (left)  mixed output           (-128..+127)
  //   let nMotMixR: number;           // Motor (right) mixed output           (-128..+127)

  //   // TEMP VARIABLES
  //   let nMotPremixL: number;    // Motor (left)  premixed output        (-128..+127)
  //   let nMotPremixR: number;    // Motor (right) premixed output        (-128..+127)
  //   let nPivSpeed: number;      // Pivot Speed                          (-128..+127)
  //   let fPivScale: number;      // Balance scale b/w drive and pivot    (   0..1   )
  //   // Calculate Drive Turn output due to Joystick X input
  //   if (y >= 0) {
  //     // Forward
  //     nMotPremixL = (x >= 0) ? 127.0 : (127.0 + x);
  //     nMotPremixR = (x >= 0) ? (127.0 - x) : 127.0;
  //   } else {
  //     // Reverse
  //     nMotPremixL = (x >= 0) ? (127.0 - x) : 127.0;
  //     nMotPremixR = (x >= 0) ? 127.0 : (127.0 + x);
  //   }

  //   // Scale Drive output due to Joystick Y input (throttle)
  //   nMotPremixL = nMotPremixL * y / 128.0;
  //   nMotPremixR = nMotPremixR * y / 128.0;

  //   // Now calculate pivot amount
  //   // - Strength of pivot (nPivSpeed) based on Joystick X input
  //   // - Blending of pivot vs drive (fPivScale) based on Joystick Y input
  //   nPivSpeed = x;
  //   fPivScale = (Math.abs(y) > threshold) ? 0.0 : (1.0 - Math.abs(y) / threshold);

  //   // Calculate final mix of Drive and Pivot
  //   nMotMixL = (1.0 - fPivScale) * nMotPremixL + fPivScale * (nPivSpeed);
  //   nMotMixR = (1.0 - fPivScale) * nMotPremixR + fPivScale * (-nPivSpeed);

  //   return { lmSpeed: nMotMixL, rmSpeed: nMotMixR }
  // }


}
