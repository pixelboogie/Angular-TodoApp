import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Todo} from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  // todosUrl:string = 'http://localhost:4200/TodoListSample';
  todosLimit = '?_limit=6';
  // todosLimit = '';

  constructor(private http:HttpClient) { }

  // Get todos
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // delete todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // add todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // toggle completed
   toggleCompleted(todo: Todo):Observable<any> {
     const url = `${this.todosUrl}/${todo.id}`;
     return this.http.put(url, todo, httpOptions);
   }
}
