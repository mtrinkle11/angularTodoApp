import { Component } from '@angular/core';
// const Swal = require('sweetalert2')


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoInput: string = "";

  todos = [{
    isChecked: false,
    name: 'Run in circles'
  },
  {
    isChecked: true,
    name: 'Kick yourself'
  },
  {
    isChecked: true,
    name: 'Laugh out loud'
  }
  ];

// If using the font awesome checkbox
  // checkOffTodo(todo) {
  //   todo.isChecked = !todo.isChecked;
  // }

  createTodo() {
    let trimmedInput = this.todoInput.trim();
    console.log(this.todoInput);
    if(trimmedInput !="") {
      this.todos.push({
        isChecked: false,
        name: this.todoInput
      });
    }
    // code that will create a todo
    this.todoInput = "";

  }

  editTodo(todo) {
    // edits the todo
    // rename that input to whatever I write
    let index = this.todos.indexOf(todo);

    // to keep comment if hit cancel. before returned null
    let oldTodo = this.todos[index].name
    this.todos[index].name = prompt("Edit Now",this.todos[index].name);

    if (this.todos[index].name == null) {
      // when cancel, put old chore back
      this.todos[index].name = oldTodo;
    }
  }

  deleteTodo(todo) {
    // deletes todo
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    // console.log(this.deleteTodo(todo));

  }

  deleteAll() {
    this.todos = [];
    // Need to find how to connect sweetalert2
    
    // swal({
    //   title: 'Sweet!',
    //   text: 'Modal with a custom image.',
    //   imageUrl: 'https://unsplash.it/400/200',
    //   imageWidth: 400,
    //   imageHeight: 200,
    //   imageAlt: 'Custom image',
    //   animation: false
    // })
  }
}