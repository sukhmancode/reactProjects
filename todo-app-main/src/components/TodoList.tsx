import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
type Props={

  todos:Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
  filteredTodos:Todo[]
}

const TodoList : React.FC<Props>= ({todos,setTodos,filteredTodos}:Props) => {
  return (
    <div>
    {filteredTodos.map((todo)=>{
    return <SingleTodo 
    todo={todo} setTodos={setTodos} 
    todos={todos} 
    key={todo.id}/>
    })}
    </div>
  )
}

export default TodoList