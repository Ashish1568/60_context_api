import { useState } from "react";

function Todo({text,isFinished,deleteTodo,editTodo,finishTodo}){

      const[isEditing,setIsEditing] =useState(false)
      const[todoText,setTodoText]=useState(text)
      console.log("inside Todo.jsx");
      return (
        <div>
           <input type="checkbox" checked={isFinished} onChange={()=>finishTodo(!isFinished)}></input>
          
           {isEditing? <input value={todoText} onChange={(e)=>setTodoText(e.target.value)}></input> :<span>{todoText}</span>}

           <button onClick={()=>{setIsEditing(!isEditing) ; editTodo(todoText)}}>{isEditing? 'save':'Edit'}</button>
           <button onClick={deleteTodo}>Delete</button>
        </div>
      )
}

export default Todo;