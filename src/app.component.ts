/**
 * top root application component
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TIMER_DIRECTIVES  } from './timer/timer';
import { TASKS_DIRECTIVES } from './tasks/tasks';
import { SHARED_PROVIDERS, AuthenticationService } from './shared/shared';


@Component({
  selector: 'pomodoro-app',
  providers: [SHARED_PROVIDERS],
  templateUrl: 'public/app.component.html',
  styleUrls: ['public/css/app.component.css']
})

export default class AppComponent { 
  userIsLoggedIn: boolean;

  constructor(private authService: AuthenticationService, private router: Router) {
    authService.userIsLoggedIn.subscribe(isLoggedIn => {
      this.userIsLoggedIn = isLoggedIn;
    });
  }

  logout($event): void {
    $event.preventDefault();
    this.authService.logout().then(success => {
      if(success) {
        this.router.navigateByUrl('/');
      }
    })
  }
}