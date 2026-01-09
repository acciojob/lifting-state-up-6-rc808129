import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {

  // ✅ Parent state
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false }
  ]);

  // ✅ Function to update state (LIFTED UP)
  function handleComplete(id) {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <TodoList
        todos={todos}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default App;
