import { useState } from "react";

function AddTodo(){
    const [todoText,setTodoText]= useState("");
      return <>
        <input type="text" placeholder="Add next todo" onChange={(e)=>(setTodoText(e.target.value))} />
        <button>submit</button>
        value={todoText};
      </>
}

export default AddTodo;