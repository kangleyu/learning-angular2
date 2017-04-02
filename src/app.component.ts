/**
 * top root application component
 */
import { Component } from '@angular/core';
import { TIMER_DIRECTIVES  } from './timer/timer';
import { TASKS_DIRECTIVES } from './tasks/tasks';
import { SHARED_PROVIDERS } from './shared/shared';

@Component({
  selector: 'pomodoro-app',
  providers: [SHARED_PROVIDERS],
  templateUrl: 'public/app.component.html'
})

export default class AppComponent { }