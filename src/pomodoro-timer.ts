import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'pomodoro-timer',
  template: `
  <h1> {{ minutes }}:{{ seconds | number: '2.0' }} </h1>
  <p> 
    <button (click)="togglePause()">
      {{ buttonLabel }}
    </button>
  </p>
  `
})
export class PomodoroTimerComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() {
    this.resetPomodoro();

    setInterval(() => this.tick(), 1000);
  }

  // tick for timer counting
  tick(): void {
    if(!this.isPaused) {
      this.buttonLabel = 'Pause';
      if(--this.seconds < 0) {
        this.seconds = 59;
        if(--this.minutes < 0) {
          this.resetPomodoro();
        }
      }
    }
  }

  // reset for the timer
  resetPomodoro(): void {
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

  // toggle the state of timer
  togglePause(): void {
    this.isPaused = !this.isPaused;
    // if countdown has started
    if(this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}

