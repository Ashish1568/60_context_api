import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'

function App() {
  const [todos,setTodos]= useState([
    {id:1, text:'todo1', isFinished:true},
    {id:2, text:'todo2', isFinished:true},
    {id:3, text:'todo3', isFinished:true},
  ])

  let nextId=todos.length+1;
  function addNewTodo(todoText){
    console.log("inside addnewtodod s")
      setTodos([...todos,{id:nextId,text:todoText, isFinished:false,}])
  }
   
  console.log("inside app jsx");
  return (
    <div>
      <TodoContext.Provider value={{todos,setTodos}}>
        <AddTodo ></AddTodo>
        <TodoList ></TodoList>
      </TodoContext.Provider>
     
    </div>
  )
}

export default App
