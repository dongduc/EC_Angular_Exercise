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

  public index;

  @Output()
  public eventDeleteList = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getIndex($event){
    this.index = $event;
  }

  deleteTodo(index){
    this.eventDeleteList.emit(index);
  }

}
