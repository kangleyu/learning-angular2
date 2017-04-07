import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Task, TasksService } from '../shared/shared';

@Component({
  selector: 'pomodoro-tasks-editor',
  templateUrl:'public/tasks/task-editor.component.html'
})
export default class TaskEditorComponent {
  task: Task;

  constructor(private tasksService: TasksService, private titleService: Title, private router: Router) {
    this.task = <Task>{};

    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }
    });
  }

  private getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  saveTask() {
    this.task.deadline = new Date(this.task.deadline.toString());
    this.tasksService.addTask(this.task);
    this.router.navigate(['tasks']);
  }
}