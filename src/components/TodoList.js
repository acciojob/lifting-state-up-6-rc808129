import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map(todo => (
        <ul key={todo.id}>
          <li>
            {todo.text}

            {/* initially button, click ke baad DOM se remove */}
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
