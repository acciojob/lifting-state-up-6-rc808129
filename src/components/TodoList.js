
// import React from "react"
// const TodoList = ({ todos, handleComplete }) => {
//   return (
//     <div>
//       {todos.map((item) => (
//         <ul key={item.id}>
//           <li>
//             {item.item}

//             {!item.flag && (
//               <button onClick={() => handleComplete(item.id)}>
//                 Complete
//               </button>
//             )}
//           </li>
//         </ul>

//       ))}
//     </div>
//   );
// };


// export default TodoList


import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((item) => (
        <ul key={item.id}>
          <li>
            {item.item}

            {/* ✅ flag true hone par button render hi nahi hoga */}
            {!item.flag ? (
              <button onClick={() => handleComplete(item.id)}>
                Complete
              </button>
            ) : null}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
