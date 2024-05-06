/*
    Implement a class `Todo` having below methods
      - add(todo): adds todo to list of todos
      - remove(indexOfTodo): remove todo from list of todos
      - update(index, updatedTodo): update todo at given index
      - getAll: returns all todos
      - get(indexOfTodo): returns todo at given index
      - clear: deletes all todos

    Once you've implemented the logic, test your code by running
  */

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length)
      this.todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length)
      this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

// const todoList=new Todo();
// todoList.addTodo('Task 1');
// todoList.addTodo('Task 2');
// console.log(todoList.getAll()); // Output: ['Task 1', 'Task 2']

// todoList.updatedTodo(1, 'Updated Task 2');
// console.log(todoList.getAll()); // Output: ['Task 1', 'Updated Task 2']

// todoList.remove(0);
// console.log(todoList.getAll()); // Output: ['Updated Task 2']

// console.log(todoList.get(0)); // Output: 'Updated Task 2'

// todoList.clear();
// console.log(todoList.getAll()); // Output: []

module.exports = Todo;
