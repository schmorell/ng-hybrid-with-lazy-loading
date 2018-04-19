import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { RouterModule, UrlHandlingStrategy, PreloadAllModules } from '@angular/router';

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

import { DynamicComponentLoaderModule, DynamicComponentManifest } from './dynamic-component-loader/dynamic-component-loader.module';

import { NgServiceService } from './ng-service.service';

// import * as jQuery from "jquery";
// (<any>window).jQuery = jQuery;

// This array defines which "componentId" maps to which lazy-loaded module.
const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'message',
    path: 'dynamic-message', // some globally-unique identifier, used internally by the router
    loadChildren: './dynamic-modules/message/message.module#MessageModule',
  },
];

// declare var angular: any;

// angular.module(PhonecatAppModule.name)
//   .directive(
//     'ng2Demo',
//     downgradeComponent({ component: Ng2DemoComponent })
//   );

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
    Ng2HeavyStuffComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    ReactiveFormsModule,
    DynamicComponentLoaderModule.forRoot(manifests),
    RouterModule.forRoot([
      {
        path: 'ng2-route',
        component: TabManagerComponent
      }
    ], {
      // enableTracing: true,
      // Uncomment to enable preloading and prebootstrapping
      // preloadingStrategy: PreloadAllModules,
      useHash: true
    }
    )
  ],
  providers: [
    phoneServiceProvider,
    NgServiceService,
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
