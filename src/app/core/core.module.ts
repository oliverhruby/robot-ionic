import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'ng2-knob';
import { ChartsModule } from 'ng2-charts';

//import { AppComponent } from './containers/app';

import { BatteryComponent } from './components/battery/BatteryComponent';
import { CameraComponent } from './components/camera/CameraComponent';
import { ChartComponent } from './components/chart/ChartComponent';
import { CompassComponent } from './components/compass/CompassComponent';
import { GamepadComponent } from './components/gamepad/GamepadComponent';
import { GyroscopeComponent } from './components/gyroscope/GyroscopeComponent';
import { SceneComponent } from './components/scene/SceneComponent';
import { SpeedGaugeComponent } from './components/speed-gauge/SpeedGaugeComponent';
import { StateComponent } from './components/state/StateComponent';
import { TRexStatusComponent } from './components/trex-status/TRexStatusComponent';
import { TRexCommandComponent } from './components/trex-command/TRexCommandComponent';

// import { GyroscopeService } from './services/gyroscope';
import { GamepadService } from './services/gamepad.service';
import { GyroscopeService } from "./services/gyroscope.service";
import { SpeechSynthesisService } from './services/speech-synthesis.service';
import { SynthesisService } from './services/synthesis.service';
import { TRexService } from './services/trex.service';
import { WebSocketService } from './services/websocket.service';

import { DeviceOrientation } from '@ionic-native/device-orientation';
import { DeviceMotion } from '@ionic-native/device-motion';

export const COMPONENTS = [
  //AppComponent,
  BatteryComponent,
  CameraComponent,
  ChartComponent,
  CompassComponent,
  GamepadComponent,
  GyroscopeComponent,
  SceneComponent,
  SpeedGaugeComponent,
  StateComponent,
  TRexCommandComponent,
  TRexStatusComponent
];

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    KnobModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        DeviceOrientation,
        DeviceMotion,
        GamepadService,
        GyroscopeService,
        SpeechSynthesisService,
        SynthesisService,
        TRexService,
        WebSocketService
      ],
    };
  }
}