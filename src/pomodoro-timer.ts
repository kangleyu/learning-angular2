import { Component } from '@angular/core';

@Component({
  selector: 'pomodoro-timer',
  template: `
  <div class="container text-center">
    <img src="assets/img/pomodoro.png" style="width:116px;height:86px" />
    <countdown [seconds]="5"
      (complete)="onCountdownCompleted()"></countdown>
  </div>
  `
})
export class PomodoroTimerComponent {
  onCountdownCompleted() {
    alert('Time up!');
  }
}
