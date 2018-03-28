import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { MessageComponent } from '../dynamic-modules/message/message.component';
import { DynamicComponentLoader } from '../dynamic-component-loader/dynamic-component-loader.service';

@Component({
  selector: 'my-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template;
  @Input() dataContext;

  @ViewChild('testOutlet', { read: ViewContainerRef }) testOutlet: ViewContainerRef;

  constructor(private dynamicComponentLoader: DynamicComponentLoader) { }

  ngOnInit(): void {
    if (this.template == 'message') {
      this.dynamicComponentLoader
        .getComponentFactory<MessageComponent>(this.template)
        .subscribe(componentFactory => {
          this.testOutlet.createComponent(componentFactory);
        }, error => {
          console.warn(error);
        });
    }
  }

  ngOnDestroy(): void {
    console.log('yey');
    this.testOutlet.remove();

  }
}
