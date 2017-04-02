/**
 * $event is the value assumed by this.seconds inside CountdownComponent.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'pomodoro-timer',
  templateUrl: './public/pomodoro-timer.html'
})
export class PomodoroTimerComponent {
  // timeout: number; /** no longer required */
  onCountdownCompleted() {
    alert('Time up!');
  }
}
