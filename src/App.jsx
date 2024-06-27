import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'

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

  return (
    <div>
      <AddTodo addNewTodo={addNewTodo}></AddTodo>
      <TodoList todos={todos}  setTodos={setTodos} ></TodoList>
    </div>
  )
}

export default App
