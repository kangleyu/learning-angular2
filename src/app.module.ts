import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { BrowserModule, Title  } from '@angular/platform-browser';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import AppComponent from './app.component';
import { FormattedTimePipe, QueuedOnlyPipe, CanActivateService, CanDeactivateService, CustomReuseStrategy } from './shared/shared';
import { TimerWidgetComponent } from './timer/timer';
import { TasksComponent, TaskIconsComponent, TaskTooltipDirective, TaskEditorComponent } from './tasks/tasks';

const appRoutes: Routes = [
  { 
    path: '', 
    data: { title: 'Home'},
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks', 
    component: TasksComponent, 
    data: { title: 'Tasks'}
  },
  { 
    path: 'tasks/editor', 
    // canActivate: [ CanActivateService ],
    // canDeactivate: [ CanDeactivateService ],
    component: TaskEditorComponent,
    data: { title: 'Welcome to the Task Form!' }
  },
  { 
    path: 'timer', 
    children: [
      {
        path: '',
        component: TimerWidgetComponent
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
    RouterModule,
    FormsModule],
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
    CanDeactivateService,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    { provide: APP_BASE_HREF, useValue: '/my-apps/pomodoro-app' }
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }