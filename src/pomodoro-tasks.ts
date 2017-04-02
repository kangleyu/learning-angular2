import {
  Component,
  Input,
  Pipe,
  PipeTransform,
  Directive,
  OnInit,
  HostListener
} from '@angular/core';

/// Model interface
interface Task {
  name: String;
  deadline: Date;
  queued: boolean;
  pomodorosRequired: number;
}

/// Local Data Service
class TasksService {
  public taskStore: Array<Task> = [];

  constructor() {
    const tasks = [
      {
        name: "Code an HTML Table",
        deadline: "June 23 2015",
        pomodorosRequired: 1
      },
      {
        name: "Sketch a wireframe for the new homepage",
        deadline: "June 24 2016",
        pomodorosRequired: 2
      },
      {
        name: "Style table with Bootstrap styles",
        deadline: "June 25 2016",
        pomodorosRequired: 1
      },
      {
        name: "Reinforce SEO with custom sitemap.xml",
        deadline: "June 26 2016",
        pomodorosRequired: 3
      }
    ];

    this.taskStore = tasks.map(task => {
      return {
        name: task.name,
        deadline: new Date(task.deadline),
        queued: false,
        pomodorosRequired: task.pomodorosRequired
      }
    });
  }
}

/// Pomorodo Task Component
@Component({
  selector: 'pomodoro-tasks',
  styleUrls: ['public/css/pomodoro-tasks.css'],
  templateUrl: 'public/pomodoro-tasks.html'
})
export class TasksComponent {
  today: Date;
  tasks: Task[];

  constructor() {
    const tasksService: TasksService = new TasksService();
    this.tasks = tasksService.taskStore;
    this.today = new Date();
  }
}