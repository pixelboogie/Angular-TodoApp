import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

    // if there actually is a title being submitted, then submit, otherwise do nothing
    if(this.title){ 
      const todo = {
        title: this.title,
        comleted: false
      }
      this.addTodo.emit(todo);
      this.title = "";
    }


  }

}
