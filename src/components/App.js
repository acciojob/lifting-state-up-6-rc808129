import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {

  const [todos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a React app" },
    { id: 3, text: "Deploy the React app" }
  ]);

  // 🔑 step 1: initially false (button visible)
  const [completed, setCompleted] = useState(false);

  function handleComplete() {
    setCompleted(true);   // 🔑 step 2: click ke baad hide
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <TodoList
        todos={todos}
        completed={completed}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default App;
