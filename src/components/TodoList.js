import React from "react";

const TodoList = ({ todos, completed, handleComplete }) => {
  return (
    <div>
      {todos.map(todo => (
        <ul key={todo.id}>
          <li>
            {todo.text}

            {/* ✅ initially render, click ke baad remove */}
            {!completed && (
              <button onClick={handleComplete}>
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
