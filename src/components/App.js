import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    { flag: false, id: 1, item: "Learn React" },
    { flag: false, id: 2, item: "Build a React app" },
    { flag: false, id: 3, item: "Deploy the React app" }
  ]);

  function handleComplete(id) {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, flag: true } : todo
    );

    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>

      <TodoList
        todos={todos}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default App;
