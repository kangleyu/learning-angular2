import { Task } from '../shared/shared';
import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'pomodoro-task-icons',
  templateUrl: 'public/tasks/task-icons.component.html'
})
export default class TaskIconsComponent implements OnInit {
  @Input() task: Task;
  @Input() size: number;
  icons: Object[] = [];

  // InInit interface demands an ngOnInit() method to be integrated in 
  // the controller class that implements such intrface, and it will
  // be executed once all input properties with a binding defined have 
  // been checked
  ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({ name: this.task.name });
  }
}