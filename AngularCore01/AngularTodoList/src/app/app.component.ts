import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Lists';

  newTodo: any;

  todos = [
    { TaskName: 'Angular 01', Complete: true },
    { TaskName: 'Angular 02', Complete: true }
  ];

  addTodo(newTodoTaskName) {
    this.newTodo = {
      TaskName: newTodoTaskName,
      Complete: false
    };
    this.todos.push(this.newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.TaskName !== todo.TaskName);
  }
}
