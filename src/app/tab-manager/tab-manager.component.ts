import {Component, ViewChild } from '@angular/core';

import {TabsComponent} from '../tabs/tabs.component';

@Component({
  selector: 'tab-manager',
  templateUrl: './tab-manager.component.html',
  styleUrls: ['./tab-manager.component.css']
})
export class TabManagerComponent {
  @ViewChild('personEdit') editPersonTemplate;
  @ViewChild('personAdd') addPersonTemplate;
  @ViewChild(TabsComponent) tabsComponent;
  
  people = [
    {
      id: 1,
      name: 'G6',
      surname: 'Dialog'
    }
  ];
  
  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`, 
      this.editPersonTemplate, 
      person,
      true
    );
  }
  
  onAddPerson() {
    this.tabsComponent.openTab(
      'New Person',
      this.addPersonTemplate, 
      {},
      true
    );
  }
  
  onPersonFormSubmit(dataModel) {
    if(dataModel.id > 0) {
      this.people = this.people.map(person => {
        if(person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });  
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random()*100);
      this.people.push(dataModel);
    }
    
    // close the tab
    this.tabsComponent.closeActiveTab();
  }
}
