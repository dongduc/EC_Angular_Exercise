import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  public items: Todo[] = [];

  @Output()
  public eventDeleteItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteTodo(index) {
    this.eventDeleteItem.emit(index);
  }

}
