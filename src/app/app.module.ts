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
import { Ng2HeavyStuffComponent } from './ng2-heavy-stuff/ng2-heavy-stuff.component';
import { Ng1TestComponentWrapper } from './upgraded/ng1-test-upgraded.component';
import { Ng1HeavyStuffComponentWrapper } from './upgraded/ng1-heavy-stuff-upgraded.component';

declare var angular: any;

angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({ component: Ng2DemoComponent })
  );

export class CustomHandlingStrategy implements UrlHandlingStrategy {
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
    TabManagerComponent,
    Ng2HeavyStuffComponent,
    Ng1TestComponentWrapper,
    Ng1HeavyStuffComponentWrapper
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
        component: TabManagerComponent
      }
    ],
      {
        useHash: true
      }
    )
  ],
  providers: [
    phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy },
    {
      provide: '$scope',
      useFactory: i => i.get('$rootScope'),
      deps: ['$injector']
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TabComponent
  ]
})
export class AppModule { }
