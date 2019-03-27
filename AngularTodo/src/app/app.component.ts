import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  isComplete: boolean;

  todos: Todo[];
  todo: Todo;

  constructor() {
    this.name = '';
    this.isComplete = false;
    this.todos = [
      { name: "Duc 1", isComplete: true },
      { name: "Duc 2", isComplete: true }
    ];
  }

  addTodo($event) {
    this.todo = {
      name: $event,
      isComplete: this.isComplete
    };
    this.todos.push(this.todo);
    this.name = '';
    event.preventDefault();
  }

  deleteTodo($event)
  {
    this.todos.splice($event, 1);
  }
}

export class Todo {
  name: string;
  isComplete: boolean;
}
