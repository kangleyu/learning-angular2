import { Task } from './models/task';
import { TasksService } from './models/tasksService';

import {
  Component,
  Pipe,
  PipeTransform,
  Directive
} from '@angular/core';

/// Pomorodo Task Component
@Component({
  selector: 'pomodoro-tasks',
  styleUrls: ['public/css/pomodoro-tasks.css'],
  templateUrl: 'public/pomodoro-tasks.html'
})
export class TasksComponent {
  today: Date;
  tasks: Task[];
  queuedTasks: Task[];
  queuedPomodoros: number;
  queueHeaderMapping: any = {
    '=0': 'No pomodoros',
    '=1': 'One pomodoros',
    'other': '# pomodoros'
  };

  constructor() {
    const tasksService: TasksService = new TasksService();
    this.tasks = tasksService.taskStore;
    this.today = new Date();
    this.updateQueuedPomodoros();
  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }

  private updateQueuedPomodoros(): void {
    this.queuedTasks = this.tasks
      .filter((task:Task) => task.queued);
      
    this.queuedPomodoros = this.tasks
      .filter((task:Task) => task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
        return pomodoros + queuedTask.pomodorosRequired;
      }, 0)
  }
};