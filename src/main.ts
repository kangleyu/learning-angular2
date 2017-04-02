/**
 * here we bootstrap the top root component
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);