import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-message',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './message.component.html',
  styleUrls: ['../../../../node_modules/@progress/kendo-ui/css/web/kendo.bootstrap-v4.min.css']
})
export class MessageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
