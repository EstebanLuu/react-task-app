import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  return (
    <div className="App">
      <h1>To do list</h1>
      <TodoForm addTodo={addTodo} />
      <button type="submit" className="todo-button">
        +
      </button>
    </div>
  );
}

export default App;
