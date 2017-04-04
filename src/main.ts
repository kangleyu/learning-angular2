/**
 * here we bootstrap the top root component
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
// This is required, because despite installing the RxJs
// bundle when installing all the Angular 2 peer dependencies, the 
// reactive functional operators, like map(), do not 
// become available straight away. We could import all of them at once
// by inserting the fllowing line of code at some step at the beginning of 
// our application initialization flow, such as the bootstrappiing stage in main.ts
import 'rxjs/add/operator/map'; 

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);