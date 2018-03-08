import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { Ng2DemoComponent } from './ng2-demo/ng2-demo.component';
import { phoneServiceProvider } from "./phone.service";

declare var angular: any;

angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({ component: Ng2DemoComponent })
  );

class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith("/ng2-route") || url.toString() === "/";
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot([
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'ng2-route'

      // },
      {
        path: 'ng2-route',
        component: Ng2DemoComponent
      }
    ],
      {
        useHash: true
      }
    )
  ],
  providers: [
    phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    Ng2DemoComponent // Don't forget this!!!
  ]
})
export class AppModule { }
