import React, { Component } from 'react';
import ToDo from "./components/ToDo";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        todos: [
          { description: 'Walk the Cat', isCompleted: true },
          { description: 'Throw the dishes away', isCompleted: false },
          { description: 'Buy new dishes', isCompleted: false }
        ],
        newTodoDescription: ''
      }
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) {return}
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false};
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  deleteTodo(e) {
    const todoList = this.state.todos;
    if (window.confirm('Are you sure you want to delete this item?')) {
      const filteredTodos = todoList.filter((item) => item !== e);
      this.setState({ todos: filteredTodos})
    }
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }
  
  render() {
    return (
      <div className="App">
        <h1>React ToDo App</h1>
        <ul>
          { this.state.todos.map((todo, index) =>
          <ToDo key={index} 
            description={ todo.description } 
            isCompleted={ todo.isCompleted } 
            toggleComplete={ () => {this.toggleComplete(index)} } 
            deleteTodo={ () => { this.deleteTodo(todo) } }/>
          ) }
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" 
            value={ this.state.newTodoDescription } 
            onChange={ (e) => this.handleChange(e) }/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;