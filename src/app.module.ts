import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { PomodoroTimerComponent } from './pomodoro-timer';
import { CountdownComponent } from './countdown';
import { TasksComponent } from './pomodoro-tasks';

// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
  imports: [BrowserModule],
  declarations: [CountdownComponent, PomodoroTimerComponent, TasksComponent],
  bootstrap: [TasksComponent],
})

export class AppModule { }