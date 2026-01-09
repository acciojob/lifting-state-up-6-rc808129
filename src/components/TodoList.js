import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>

      {todos.map(todo => (
        <ul key={todo.id}>
          <li>
            {todo.text}

            {/* ✅ Button sirf incomplete todo ke liye */}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
