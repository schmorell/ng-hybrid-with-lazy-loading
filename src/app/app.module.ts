import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { Ng2DemoComponent } from './ng2-demo/ng2-demo.component';
import { phoneServiceProvider } from "./phone.service";
import { PeopleListComponent } from './people-list/people-list.component';
import { DynamicTabsDirective } from './dynamic-tabs.directive';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabManagerComponent } from './tab-manager/tab-manager.component';

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
    Ng2DemoComponent,
    PeopleListComponent,
    DynamicTabsDirective,
    PersonEditComponent,
    TabComponent,
    TabsComponent,
    TabManagerComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    ReactiveFormsModule,
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
    TabComponent
  ]
})
export class AppModule { }
