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
import CanDeactivateService from './services/canDeactivate.service';
import CustomReuseStrategy from './router/custom.reuse.strategy';
import AuthenticationService from './services/authentication.service';

// Group for all pipes
const SHARED_PIPES: any[] = [
  FormattedTimePipe,
  QueuedOnlyPipe
];

// Group for all services (providers)
const SHARED_PROVIDERS: any[] = [
  SettingsService,
  TasksService,
  CanActivateService,
  CanDeactivateService,
  AuthenticationService
];

export {
  Queueable,
  Task,

  CustomReuseStrategy,

  FormattedTimePipe,
  QueuedOnlyPipe,
  SHARED_PIPES,

  TasksService,
  SettingsService,
  CanActivateService,
  CanDeactivateService,
  AuthenticationService,
  SHARED_PROVIDERS
};