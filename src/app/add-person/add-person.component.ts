import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  @Input() person;
  @Output() savePerson = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
