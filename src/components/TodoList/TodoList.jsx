import { useContext } from 'react';
import Todo from '../Todo/Todo'
import TodoContext from '../../context/TodoContext';
function TodoList(){

    // function onDeleteTodo(id){
    //     console.log("inside on delete todo")
    //     const newTodoList=todos.filter(todo=> todo.id != id);
    //     
    const {todos,setTodos}=useContext(TodoContext);

    function onDeleteTodo(id) {
        const newTodoList = todos.filter(todo => todo.id !== id);
        setTodos(newTodoList);
    };

   function onEditTodo(id,newTodo){
    console.log("inside edit todo");
       const newTodoList= todos.map(todo=>{
           if(todo.id==id){
            todo.text=newTodo;
           }
           return todo;
       });

       setTodos(newTodoList);
   }
   
   function onFinishTodo(id,state)
   {
      const newTodoList= todos.map(todo=>{
           if(todo.id==id)
            {
                todo.isFinished=state;
            }
            return todo;
      })
      setTodos(newTodoList);
   }
   

    return (
        <>
           
           {todos && todos.map((todo)=>(<Todo
                                            key={todo.id} 
                                            text={todo.text} 
                                            isFinished={todo.isFinished} 
                                            deleteTodo ={()=> onDeleteTodo(todo.id)}
                                            editTodo={(newTodo)=>onEditTodo(todo.id,newTodo)}
                                            finishTodo={(state)=>onFinishTodo(todo.id,state)}>
                                           
                                        </Todo>))}

        </>
    )
}

export default TodoList;