import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { Todo } from '../model/todo.type';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
