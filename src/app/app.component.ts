import { Component, Inject } from '@angular/core';
import { UpgradeModule } from "@angular/upgrade/static";

import { PHONE_SERVICE } from "./phone.service";

import { PhonecatAppModule }  from '../ng1/app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

   phones: any[] = [];

   constructor(private upgrade: UpgradeModule) { }

    ngOnInit() {
      this.upgrade.bootstrap(document.body, [PhonecatAppModule.name]);
    }
}
