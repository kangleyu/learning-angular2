import { Injectable } from '@angular/core';

@Injectable()
export default class SettingsService {
  timerMinutes: number;
  lablesMap: any;
  pluralsMap: any;

  constructor() {
    this.timerMinutes = 25;
    this.lablesMap = {
      'timer': {
        'start': 'Start Timer',
        'pause': 'Pause Timer',
        'resume': 'Resume Countdown',
        'other': 'Unknown'
      }
    };
    this.pluralsMap = {
      'tasks': {
        '=0': 'No pomodoros',
        '=1': 'One pomodoro',
        'other': '# pomodoros'
      }
    }
  }
}