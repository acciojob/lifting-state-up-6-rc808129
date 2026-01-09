import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, item: "Learn React" },
    { id: 2, item: "Build a React app" },
    { id: 3, item: "Deploy the React app" }
  ]);

  const [completed, setCompleted] = useState(false);

  function handleComplete() {
    setCompleted(true);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>

      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        completed={completed}
      />
    </div>
  );
};

export default App;
