/**
 * facade for the 'shared' context
 */
import Queueable from './interfaces/queuable';
import Task from './interfaces/task';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe from './pipes/queued-only.pipe';

import TasksService from './services/task.service';
import SettingsService from './services/settings.service';
import CanActivateService from './services/canActivate.service';

// Group for all pipes
const SHARED_PIPES: any[] = [
  FormattedTimePipe,
  QueuedOnlyPipe
];

// Group for all services (providers)
const SHARED_PROVIDERS: any[] = [
  SettingsService,
  TasksService,
  CanActivateService
];

export {
  Queueable,
  Task,

  FormattedTimePipe,
  QueuedOnlyPipe,
  SHARED_PIPES,

  TasksService,
  SettingsService,
  CanActivateService,
  SHARED_PROVIDERS
};