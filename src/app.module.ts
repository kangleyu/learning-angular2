import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PomodoroTimerComponent } from './pomodoro-timer';
import { CountdownComponent } from './countdown';
import { TasksComponent } from './pomodoro-tasks';
import { TaskIconsComponent } from './pomodoro-taskicons';
import { FormattedTimePipe } from './pipes/pomodoro-pipes';
import { QueuedOnlyPipe } from './pipes/pomodoro-pipes';
import { TaskTooltipDirective } from './directives/pomodoro-tooltipDirective';


// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [ 
    CountdownComponent, 
    PomodoroTimerComponent, 
    TasksComponent,
    TaskIconsComponent,
    FormattedTimePipe,
    QueuedOnlyPipe,
    TaskTooltipDirective
  ],
  bootstrap: [TasksComponent],
})

export class AppModule { }