import { Task } from './task';

/// Local Data Service
export class TasksService {
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
        deadline: "June 25 2017",
        pomodorosRequired: 1
      },
      {
        name: "Reinforce SEO with custom sitemap.xml",
        deadline: "June 26 2017",
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