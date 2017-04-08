import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ROUTER_CONFIGURATION } from '@angular/router';
import { SettingsService, TasksService } from '../shared/shared';

@Component({
  selector: 'pomodoro-timer-widget',
  templateUrl: 'public/timer/timer-widget.component.html',
  styleUrls: ['public/css/timer/timer-widget.component.css']
})
export default class TimerWidgetComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabelKey: string;
  buttonLabelsMap: any;
  taskName: string;

  constructor(private settingsService: SettingsService,
              private route: ActivatedRoute,
              private taskService: TasksService) {
    this.buttonLabelsMap = settingsService.lablesMap.timer;
  }

  ngOnInit(): void {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);

    this.route.params.subscribe((params: Params) => {
        let taskIndex = params['id'];
        if (!isNaN(taskIndex)) {
          this.taskName = this.taskService.taskStore[taskIndex].name;
        }
      });
  }

  resetPomodoro(): void {
    this.isPaused = true;
    this.minutes = this.settingsService.timerMinutes - 1;
    this.seconds = 59;
    this.buttonLabelKey = 'start';
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabelKey = 'pause';
      if(--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetPomodoro();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutes < this.settingsService.timerMinutes || this.seconds < 59) {
      this.buttonLabelKey = this.isPaused ? 'resume' : 'pause';
    }
  }
}

