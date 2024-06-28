import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo(){
    const{todos,setTodos}=useContext(TodoContext);

    const [todoText,setTodoText]= useState("");
      return <>
        <input type="text" placeholder="Add next todo" onChange={(e)=>(setTodoText(e.target.value))} value={todoText} />
        <button  onClick={()=>{
                let nextId=todos.length+1;
                setTodos([...todos,{id:nextId,text:todoText,isFinished:false}])
        }} >submit</button>
        
      </>
}

export default AddTodo;