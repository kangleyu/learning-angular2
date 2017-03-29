/**
 * $event is the value assumed by this.seconds inside CountdownComponent.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'pomodoro-timer',
  template: `
  <div class="container text-center">
    <img src="assets/img/pomodoro.png" style="width:116px;height:86px" />
    <countdown [seconds]="15"
      (complete)="onCountdownCompleted()"
      (progress)="timeout = $event"></countdown>
    <p *ngIf="timeout < 10">
      Beware! Only <strong>{{timeout}} seconds</strong> left.
    </p>
  </div>
  `
})
export class PomodoroTimerComponent {
  timeout: number;
  onCountdownCompleted() {
    alert('Time up!');
  }
}
