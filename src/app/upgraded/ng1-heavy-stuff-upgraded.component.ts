import { Directive, Inject, ElementRef, Injector, OnInit, OnChanges, DoCheck, OnDestroy, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

@Directive({ selector: 'ng1-heavy-stuff-upgraded' })
export class Ng1HeavyStuffComponentWrapper extends UpgradeComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  // The names of the input and output properties here must match the names of the
  // `<` and `&` bindings in the AngularJS component that is being wrapped
  
  @Input() person: any;
  @Output() onPersonSave: EventEmitter<void>;

  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    // We must pass the name of the directive as used by AngularJS to the super
    super('ng1HeavyStuff', elementRef, injector);

  }
  ngOnInit() {
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }

  ngDoCheck() {
    super.ngDoCheck();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
