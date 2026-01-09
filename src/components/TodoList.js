import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map(todo => (
        <ul key={todo.id}>
          <li>
            {todo.text}

            {/* 🔑 KEY: initial render me button aana hi chahiye */}
            {!todo.completed && (
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
