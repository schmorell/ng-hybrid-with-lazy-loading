import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';

import { TabsComponent } from '../tabs/tabs.component';
import { UrlSegment, ActivatedRoute, Router } from '@angular/router';
import { DynamicComponentLoader } from '../dynamic-component-loader/dynamic-component-loader.service';
import { MessageComponent } from '../dynamic-modules/message/message.component';

@Component({
  selector: 'tab-manager',
  templateUrl: './tab-manager.component.html',
  styleUrls: ['./tab-manager.component.css']
})
export class TabManagerComponent implements OnInit {
  @ViewChild('personEdit') editPersonTemplate;
  @ViewChild('personAdd') addPersonTemplate;
  @ViewChild(TabsComponent) tabsComponent;

  @ViewChild('testOutlet', { read: ViewContainerRef }) testOutlet: ViewContainerRef;

  component;

  people = [
    {
      id: 1,
      name: 'G6',
      surname: 'Dialog'
    }
  ];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dynamicComponentLoader: DynamicComponentLoader) { }

  loadComponent() {
    let random = Math.random() * 10;

    this.router.navigate(['//ng2-route', { component: 'test', random: random }]);
}

  ngOnInit(): void {
    this.route.url.subscribe((url: UrlSegment[]) => {
      this.component = url[0].parameters.component;
      if (this.component) {

        if (this.component == 'test') {
          this.tabsComponent.openTab(
            `Add`,
            'message',
            null,
            true
          );
        }
      }
      console.log(url);
    })
  }

  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      'message',
      person,
      true
    );
  }

  onAddPerson() {
    this.dynamicComponentLoader
      .getComponentFactory<MessageComponent>('message')
      .subscribe(componentFactory => {
        this.testOutlet.createComponent(componentFactory);
      }, error => {
        console.warn(error);
      });
  }

  onPersonFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      this.people = this.people.map(person => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
  }
}
