import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import AppComponent from './app.component';
import { FormattedTimePipe, QueuedOnlyPipe } from './shared/shared';
import { TimerWidgetComponent } from './timer/timer';
import { TasksComponent, TaskIconsComponent, TaskTooltipDirective } from './tasks/tasks';

// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [ 
    AppComponent,
    FormattedTimePipe,
    QueuedOnlyPipe,
    TimerWidgetComponent,
    TasksComponent,
    TaskTooltipDirective,
    TaskIconsComponent
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }