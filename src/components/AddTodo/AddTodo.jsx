import { useState } from "react";

function AddTodo({addNewTodo}){
    const [todoText,setTodoText]= useState("");
      return <>
        <input type="text" placeholder="Add next todo" onChange={(e)=>(setTodoText(e.target.value))} value={todoText} />
        <button  onClick={()=>{addNewTodo(todoText)}} >submit</button>
        
      </>
}

export default AddTodo;