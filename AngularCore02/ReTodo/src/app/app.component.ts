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
      { id: new Date, name: "Duc 1", isComplete: true },
      { id: new Date, name: "Duc 2", isComplete: true }
    ];
  }

  addTodo($event) {
    this.todo = {
      id: new Date,
      name: $event,
      isComplete: this.isComplete
    };
    this.todos.push(this.todo);
    this.name = '';
    event.preventDefault();
  }

  deleteTodo($event)
  {
    this.todos = this.todos.filter(data => {
      return data.id != $event;
    });
  }

  completeTodo($event){
    console.log($event);
    this.todos.forEach(element => {
      if(element.id == $event){
        element.isComplete = !element.isComplete;
      }
    });
  }
}

export class Todo {
  id: any;
  name: string;
  isComplete: boolean;
}
