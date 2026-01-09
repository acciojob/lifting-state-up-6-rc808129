import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map(todo => (
        <ul key={todo.id}>
          <li>
            {todo.text}

            {/* 👇 THIS IS THE KEY LINE */}
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
