import { Component, OnInit } from '@angular/core';
import TaskIconsComponent  from './task-icons.component';
import TaskTooltipDirective from './task-tooltip.directive';
import { TasksService, SettingsService, Task, SHARED_PIPES } from '../shared/shared';


/// Pomorodo Task Component
@Component({
  selector: 'pomodoro-tasks',
  styleUrls: ['public/css/tasks/tasks.component.css'],
  templateUrl: 'public/tasks/tasks.component.html'
})
export default class TasksComponent implements OnInit {
  today: Date;
  tasks: Task[];
  queuedPomodoros: number;
  queueHeaderMapping: any;
  timerMinutes: number;

  constructor(
    private tasksService: TasksService,
    private settingsService: SettingsService) {
    this.tasks = this.tasksService.taskStore;
    this.today = new Date();
    this.queueHeaderMapping = settingsService.pluralsMap.tasks;
    this.timerMinutes = settingsService.timerMinutes;
  }

  ngOnInit(): void {
    this.updateQueuedPomodoros();
  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }

  private updateQueuedPomodoros(): void {
    this.queuedPomodoros = this.tasks
      .filter((task:Task) => task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
        return pomodoros + queuedTask.pomodorosRequired;
      }, 0)
  }
};