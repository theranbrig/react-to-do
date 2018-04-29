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
        ]
      }
  }
  
  render() {
    return (
      <div className="App">
        { this.state.todos.map((todo, index) =>
          <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} />
        )}
      </div>
    );
  }
}

export default App;