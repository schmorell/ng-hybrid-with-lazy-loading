import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { Ng2DemoComponent } from './ng2-demo/ng2-demo.component';
import { phoneServiceProvider } from "./phone.service";

declare var angular: any;

angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({component: Ng2DemoComponent})
  );

@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    phoneServiceProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    Ng2DemoComponent // Don't forget this!!!
  ]
})
export class AppModule { }
