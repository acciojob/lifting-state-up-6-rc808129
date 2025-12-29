
import React from "react"
const TodoList = ({todos,handleComplete})=>{


  return(<div>
    {todos.map((item)=>{
      return(<ul key={item.id}>
         <li>{item.item}</li> 
        
        {!item.flag && (
          <button onClick={() => handleComplete(item.id)}>
            Complete
          </button>
        )}
      </ul>

      )
    })}

  </div>)
}

export default TodoList