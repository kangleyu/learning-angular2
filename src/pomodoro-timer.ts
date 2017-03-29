/**
 * $event is the value assumed by this.seconds inside CountdownComponent.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'pomodoro-timer',
  template: `
  <div class="container text-center">
    <img src="assets/img/pomodoro.png" style="width:116px;height:86px" />
    <countdown [seconds]="25"
      (complete)="onCountdownCompleted()"
      #counter>
    </countdown>
    <p>
      <button class="btn btn-default" (click)="counter.seconds = 25">
        Reset countdown to 25 seconds
      </button>
    </p>
    <p *ngIf="counter.seconds < 10">
      Beware! Only <strong>{{counter.seconds}} seconds</strong> left.
    </p>
  </div>
  `
})
export class PomodoroTimerComponent {
  // timeout: number; /** no longer required */
  onCountdownCompleted() {
    alert('Time up!');
  }
}
