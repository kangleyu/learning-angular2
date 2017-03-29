import { Component } from '@angular/core';

@Component({
  selector: 'pomodoro-timer',
  template: `
  <div class="container text-center">
    <img src="assets/img/pomodoro.png" />
    <countdown [seconds]="25"></countdown>
  </div>
  `
})
export class PomodoroTimerComponent {}
