import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule, Title  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import AppComponent from './app.component';
import { FormattedTimePipe, QueuedOnlyPipe, CanActivateService, CanDeactivateService } from './shared/shared';
import { TimerWidgetComponent } from './timer/timer';
import { TasksComponent, TaskIconsComponent, TaskTooltipDirective, TaskEditorComponent } from './tasks/tasks';


const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { 
    path: 'tasks/editor', 
    canActivate: [ CanActivateService ],
    canDeactivate: [ CanDeactivateService ],
    component: TaskEditorComponent,
    data: { title: 'Welcome to the Task Form!' }
  },
  { 
    path: 'timer', 
    children: [
      {
        path: '',
        component: TimerWidgetComponent,
      },
      {
        path: 'task/:id',
        component: TimerWidgetComponent
      }
    ]
  }
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
  providers: [
    Title,
    CanActivateService,
    CanDeactivateService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }