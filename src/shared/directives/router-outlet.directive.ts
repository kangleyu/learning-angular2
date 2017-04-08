import { Directive, ViewContainerRef, Attribute, Input, ComponentFactoryResolver, ResolvedReflectiveProvider, Injector } from '@angular/core'; 
import { Router, RouterOutlet, RouterOutletMap, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared';

@Directive({
  selector: 'pomodoro-router-outlet'
})
export default class RouterOutletDirective extends RouterOutlet {
  parentRouter: Router;
  @Input() protectedPath: string;
  @Input() loginUrl: string;

  constructor(
    _routerOutletMap: RouterOutletMap, 
    _viewContainerRef: ViewContainerRef, 
    _componentFactoryResolver: ComponentFactoryResolver, 
    _parentRouter: Router,
    @Attribute('name') nameAttr: string) {
    super(_routerOutletMap, _viewContainerRef, _componentFactoryResolver, nameAttr);
    this.parentRouter = _parentRouter;
  }

  activate(
    activatedRoute: ActivatedRoute, 
    resolver: ComponentFactoryResolver, 
    injector: Injector, 
    providers: ResolvedReflectiveProvider[], 
    outletMap: RouterOutletMap): void {
     console.log("Active the route...");
  }
}