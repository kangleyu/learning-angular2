import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'pomodoroFormattedTime'
})
export class FormattedTimePipe implements PipeTransform {
  transform(totalMinutes: number): string {
    let minutes: number = totalMinutes % 60;
    let hours: number = Math.floor(totalMinutes / 60);
    return `${hours}h:${minutes}m`;
  }
}

@Pipe({
  name: 'pomodoroQueuedOnly',
  pure: false
})
export class QueuedOnlyPipe implements PipeTransform {
  transform(tasks: Task[], ...args: any[]):Task[] {
    return tasks.filter((task: Task) => { return task.queued === args[0]; });
  }
}