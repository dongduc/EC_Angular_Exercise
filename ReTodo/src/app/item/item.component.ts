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

  @Output()
  public eventCompleteItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(id) {
    this.eventDeleteItem.emit(id);
  }

  completeItem(id) {
    this.eventCompleteItem.emit(id);
  }

}
