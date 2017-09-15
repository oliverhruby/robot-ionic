import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TRexService } from '../../services/TRexService';
import { Widget } from '../../widget/widget';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Store, createFeatureSelector } from '@ngrx/store';
import * as joystick from '../../actions/joystick';
import * as joystickReducers from '../../reducers/joystick';
import * as trex from '../../actions/trex';

@Component({
  selector: 'app-trex-command',
  templateUrl: './trex-command.html'
  //,styleUrls: ['./trex-command.css']
})
export class TRexCommandComponent extends Widget implements AfterViewInit {
  pressed: boolean = false;
  state: Observable<joystickReducers.State>;

  constructor(
    private store: Store<joystickReducers.State>,
    private tRexService: TRexService
  ) {
    super();
    this.title = 'TRex Commands';
    this.state = this.store.select<joystickReducers.State>(createFeatureSelector<joystickReducers.State>('joystick'));
  }

  forward() {
    this.store.dispatch(new trex.UpdateMotors({ lmSpeed: 30, rmSpeed: 30}));
  }

  left() {
    this.store.dispatch(new trex.UpdateMotors({ lmSpeed: 30, rmSpeed: 0}));
  }

  right() {
    this.store.dispatch(new trex.UpdateMotors({ lmSpeed: 0, rmSpeed: 30}));
  }

  stop() {
    this.store.dispatch(new trex.UpdateMotors({ lmSpeed: 0, rmSpeed: 0}));
  }

  photo() {
    // TODO: move this to an effect
    this.tRexService.photo();
  }

  talk() {
    // TODO: move this to an effect
    this.tRexService.talk('hello');
  }

  status() {
    // TODO: move this to an effect
    this.tRexService.status();
  }

  servo(index, value) {
    // TODO: move this to an effect
    this.store.dispatch(new trex.UpdateServos(JSON.parse("{\"servo" + index + "\":" + value + "}")));
  }

  @ViewChild('joy')
  joy: ElementRef;

  ngAfterViewInit() {
    const joy = this.joy.nativeElement;
    const mouseDown$ = Observable.fromEvent<MouseEvent>(joy, 'mousedown');
    // const mouseMove$ = Observable.fromEvent<MouseEvent>(joy, 'mousemove');
    const mouseUp$ = Observable.fromEvent<MouseEvent>(joy, 'mouseup');

    mouseDown$.subscribe(data => this.store.dispatch(
      new joystick.Update({ x: data.offsetX / 100 - 1, y: 1 - data.offsetY / 100 })
    ));

    // mouseMove$.subscribe(data => this.store.dispatch(
    //   new fromJoystick.Update({ x: data.offsetX / 100 - 1, y: 1 - data.offsetY / 100 })
    // ));

    mouseUp$.subscribe(data => this.store.dispatch(
      new joystick.Update({ x: 0, y: 0 })
    ));
  }
}
