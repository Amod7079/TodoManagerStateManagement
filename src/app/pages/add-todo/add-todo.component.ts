import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/components/models/todo';
import * as uuid from 'uuid';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  formSubmitted(event: SubmitEvent) {
    this.todo.id = uuid.v4();
    event.preventDefault();
    console.log(this.todo)
  }


  todo = new Todo();



  constructor() { }

  ngOnInit(): void {
  }

}
