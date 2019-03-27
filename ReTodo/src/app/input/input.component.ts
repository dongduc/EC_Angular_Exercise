import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output()
  public eventAddTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo(value){
    this.eventAddTodo.emit(value);
  }
}
