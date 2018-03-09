import { Directive, Inject, ElementRef, Injector } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

@Directive({selector: 'ng1-test-upgraded'})
export class Ng1TestComponentWrapper extends UpgradeComponent {
  // The names of the input and output properties here must match the names of the
  // `<` and `&` bindings in the AngularJS component that is being wrapped
  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    // We must pass the name of the directive as used by AngularJS to the super
    super('ng1Test', elementRef, injector);
  }
}
