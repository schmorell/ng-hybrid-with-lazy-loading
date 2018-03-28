import { NgModule } from '@angular/core';

import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { MessageComponent } from './message.component';
import { Ng1HeavyStuffComponentWrapper } from '../../upgraded/ng1-heavy-stuff-upgraded.component';

@NgModule({
  declarations: [
    MessageComponent,
    Ng1HeavyStuffComponentWrapper
  ],
  imports: [
    DynamicComponentLoaderModule.forChild(MessageComponent),
  ],
})
export class MessageModule {}
