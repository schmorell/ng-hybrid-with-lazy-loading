import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-heavy-stuff',
  templateUrl: './ng2-heavy-stuff.component.html',
  styleUrls: ['./ng2-heavy-stuff.component.css']
})
export class Ng2HeavyStuffComponent implements OnInit {

  arrayNumbers: Array<string> = [];
  arrayItems: Array<string> = [];

  constructor() { }

  ngOnInit() {
    for (var i = 0; i < 10000; i++) {
      this.arrayNumbers.push('_' + i);
    }

    this.arrayItems.push(new Array(1000000).join('x'));
  }
}
