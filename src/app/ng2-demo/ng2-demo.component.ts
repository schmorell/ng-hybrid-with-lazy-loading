import { Component, OnInit, Inject } from '@angular/core';
import { PHONE_SERVICE } from "../phone.service";

@Component({
  selector: 'ng2-demo',
  template: `
  <div class="ng2-border">
  <label>ng2-demo.component</label>
  <h3>Angular 2 Demo Component</h3>
  <p>
    {{phones.length}} Phones found.
  </p>

  <tab-manager></tab-manager>
  </div>
  `
})
export class Ng2DemoComponent implements OnInit {

  phones: any[] = [];

  constructor(
    @Inject(PHONE_SERVICE) private phoneService: any) {
    }

    ngOnInit() {
      this.phones = this.phoneService.query();
    }

}
