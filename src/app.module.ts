import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PomodoroTimerComponent } from './pomodoro-timer';
import { CountdownComponent } from './countdown';
import { TasksComponent } from './pomodoro-tasks';
import { TaskIconsComponent } from './pomodoro-taskicons';

// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [ 
    CountdownComponent, 
    PomodoroTimerComponent, 
    TasksComponent,
    TaskIconsComponent
  ],
  bootstrap: [TasksComponent],
})

export class AppModule { }