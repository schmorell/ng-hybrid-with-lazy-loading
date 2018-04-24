import { NgModule } from '@angular/core';

import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { CommentComponent } from './comment.component';
import { Ng1HeavyStuffComponentWrapper } from '../../upgraded/ng1-heavy-stuff-upgraded.component';
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';

import { PhonecatAppModule } from '../../../ng1/app.module';
// import { Ng1TestComponentWrapper } from '../../upgraded/ng1-test-upgraded.component';

import { setUpLocationSync } from '@angular/router/upgrade';

import { NgServiceService } from '../../ng-service.service';

import 'angular';

declare const angular: any;

@NgModule({
  declarations: [
    CommentComponent,
    Ng1HeavyStuffComponentWrapper,
    // Ng1TestComponentWrapper
  ],
  imports: [
    DynamicComponentLoaderModule.forChild(CommentComponent),
  ]
})
export class CommentModule {
  constructor(upgrade: UpgradeModule, private ngService: NgServiceService) {
    if (!ngService.IsLoaded()) {
      setAngularJSGlobal(angular);
      upgrade.bootstrap(document.body, [PhonecatAppModule.name]);

      ngService.Load();
    }

    // setUpLocationSync(upgrade);
  }  
}
