import { Pipe, PipeTransform } from '@angular/core';
import { Queueable } from '../shared';

@Pipe({
  name: 'pomodoroQueuedOnly',
  pure: false
})
export default class QueuedOnlyPipe implements PipeTransform {
  transform(queueableItems: Queueable[], ...args: any[]):Queueable[] {
    return queueableItems.filter((item: Queueable) => { return item.queued === args[0]; });
  }
}