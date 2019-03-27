import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public lists: Todo[] = [];

  @Output()
  public eventDeleteListItem = new EventEmitter();

  @Output()
  public eventCompleteListItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteListItem($event) {
    this.eventDeleteListItem.emit($event);
  }

  completeListItem($event) {
    this.eventCompleteListItem.emit($event);
  }

}
