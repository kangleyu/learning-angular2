import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { PomodoroTimerComponent } from './pomodoro-timer';
import { CountdownComponent } from './countdown';

// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
  imports: [BrowserModule],
  declarations: [CountdownComponent, PomodoroTimerComponent],
  bootstrap: [PomodoroTimerComponent],
})

export class AppModule { }