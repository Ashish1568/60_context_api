import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
  const todos=[
    {id:1, text:'todo1', isFinished:true},
    {id:2, text:'todo2', isFinished:true},
    {id:3, text:'todo3', isFinished:true},
  ]

  return (
    <div>
      <AddTodo></AddTodo>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App
