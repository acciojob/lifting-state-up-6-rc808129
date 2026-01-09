import React from "react";

const TodoList = ({ todos, completed, handleComplete }) => {
  return (
    <div>
      {todos.map(todo => (
        <ul key={todo.id}>
          <li>
            {todo.text}

            {/* ✅ button DOM se completely remove */}
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
