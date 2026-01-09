import React from "react";

const TodoList = ({ todos, handleComplete, completed }) => {
  return (
    <div>
      {todos.map(item => (
        <ul key={item.id}>
          <li>
            {item.item}

            {!completed && (
              <button onClick={()=>handleComplete(item.id)}>
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
