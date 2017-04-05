import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import AppComponent from './app.component';
import { FormattedTimePipe, QueuedOnlyPipe } from './shared/shared';
import { TimerWidgetComponent } from './timer/timer';
import { TasksComponent, TaskIconsComponent, TaskTooltipDirective, TaskEditorComponent } from './tasks/tasks';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'tasks/editor', component: TaskEditorComponent },
  { path: 'timer/:id', component: TimerWidgetComponent }
];

// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes), 
    BrowserModule, 
    CommonModule, 
    HttpModule, 
    RouterModule],
  declarations: [ 
    AppComponent,
    FormattedTimePipe,
    QueuedOnlyPipe,
    TimerWidgetComponent,
    TasksComponent,
    TaskTooltipDirective,
    TaskIconsComponent,
    TaskEditorComponent
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }