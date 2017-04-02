import { Task } from './models/task';

import {
  Component,
  Input,
  Pipe,
  PipeTransform,
  Directive,
  OnInit,
  HostListener
} from '@angular/core';

@Component({
  selector: 'pomodoro-task-icons',
  templateUrl: 'public/pomodoro-taskicons.html'
})
export class TaskIconsComponent implements OnInit {
  @Input() task: Task;
  icons: Object[] = [];
  @Input() size: number;

  // InInit interface demands an ngOnInit() method to be integrated in 
  // the controller class that implements such intrface, and it will
  // be executed once all input properties with a binding defined have 
  // been checked
  ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({ name: this.task.name });
  }
}