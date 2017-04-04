/**
 * facade for the 'tasks' context
 */
import TasksComponent from './tasks.component';
import TaskIconsComponent  from './task-icons.component';
import TaskEditorComponent from './task-editor.component';
import TaskTooltipDirective from './task-tooltip.directive';

const TASKS_DIRECTIVES: any[] = [
  TasksComponent,
  TaskEditorComponent,
  TaskIconsComponent,
  TaskTooltipDirective
];

export {
  TASKS_DIRECTIVES,
  TasksComponent,
  TaskEditorComponent,
  TaskIconsComponent,
  TaskTooltipDirective
}