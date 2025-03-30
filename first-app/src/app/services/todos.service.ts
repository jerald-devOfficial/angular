import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);

  constructor() {}
  getTodosFromApi() {
    // a bit different from how js and react fetch data
    // return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');

    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Todo[]>(url);
  }
}
