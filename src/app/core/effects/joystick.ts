import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as trex from '../actions/trex';
import * as joystick from '../actions/joystick';
import * as joystickReducers from '../reducers/joystick';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class JoystickEffects {

    constructor(
        private store: Store<joystickReducers.State>,
        private action$: Actions
    ) { }

    @Effect()
    updateMotors$ = this.action$
        .ofType<joystick.Update>(joystick.JOYSTICK_UPDATE)
        .do((action) => this.store.dispatch(
            new trex.UpdateMotors(this.translate(action.payload.x * 255, action.payload.y * 255))
        ))
        .filter(() => null);

    /**
     * Translates the joystick position to differencial
     * motor speed values
     * @param x Joystick x position ( -(range+1) .. +range )
     * @param y Joystick y position ( -(range+1) .. +range )
     * @param threshold The threshold at which the pivot action starts
     * This threshold is measured in units on the Y-axis
     * away from the X-axis (Y=0). A greater value will assign
     * more of the joystick's range to pivot actions.
     *      Allowable range: (0..+range)  Joystick y position (-(range+1)..+range)
     */
    private translate(x: number, y: number, threshold: number = 32.0) {
        const range = 255.0;

        // OUTPUTS
        let nMotMixL: number;           // Motor (left)  mixed output           (-128..+127)
        let nMotMixR: number;           // Motor (right) mixed output           (-128..+127)

        // TEMP VARIABLES
        let nMotPremixL: number;    // Motor (left)  premixed output        (-128..+127)
        let nMotPremixR: number;    // Motor (right) premixed output        (-128..+127)
        let nPivSpeed: number;      // Pivot Speed                          (-128..+127)
        let fPivScale: number;      // Balance scale b/w drive and pivot    (   0..1   )
        // Calculate Drive Turn output due to Joystick X input
        if (y >= 0) {
            // Forward
            nMotPremixL = (x >= 0) ? range : (range + x);
            nMotPremixR = (x >= 0) ? (range - x) : range;
        } else {
            // Reverse
            nMotPremixL = (x >= 0) ? (range - x) : range;
            nMotPremixR = (x >= 0) ? range : (range + x);
        }

        // Scale Drive output due to Joystick Y input (throttle)
        nMotPremixL = nMotPremixL * y / (range + 1);
        nMotPremixR = nMotPremixR * y / (range + 1);

        // Now calculate pivot amount
        // - Strength of pivot (nPivSpeed) based on Joystick X input
        // - Blending of pivot vs drive (fPivScale) based on Joystick Y input
        nPivSpeed = x;
        fPivScale = (Math.abs(y) > threshold) ? 0.0 : (1.0 - Math.abs(y) / threshold);

        // Calculate final mix of Drive and Pivot
        nMotMixL = (1.0 - fPivScale) * nMotPremixL + fPivScale * (nPivSpeed);
        nMotMixR = (1.0 - fPivScale) * nMotPremixR + fPivScale * (-nPivSpeed);

        return { lmSpeed: Math.round(nMotMixL), rmSpeed: Math.round(nMotMixR) }
    }

}
