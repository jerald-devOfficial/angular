import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'Buy groceries',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'Buy milk',
      completed: false,
    },
  ];
  constructor() {}
}
