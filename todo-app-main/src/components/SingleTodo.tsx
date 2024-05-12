import React from 'react'
import { useState } from 'react'
import { Todo } from '../model'


type Props={
  todo:Todo
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
  todos:Todo[],
  
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  const [mutableTodo, setMutableTodo] = useState<Todo>(todo);
    const [focused,setFocused]=useState<boolean>(false)

    const setFocus=()=>{
      setFocused(true)
    }

    const setBlur=()=>{
      setFocused(false)
    }

    const handleRemove = (id:number)=>{
      setTodos(todos.filter(todo=>todo.id!==id))

    }

    const toggleCompleted = (id:number) => {
      setMutableTodo({ ...mutableTodo, isDone: !mutableTodo.isDone });
      const updatedTodos = todos.map((item) =>
        item.id === todo.id ? { ...item, isDone: !item.isDone } : item
      );
      setTodos(updatedTodos);
    };
  return (

    <form className='todo' onMouseEnter={setFocus} onMouseLeave={setBlur}>
      <div className='todo-wrap' onClick={()=>toggleCompleted(todo.id)}>
        {
            todo.isDone ? 
            (<div>
              <div className='input-after'>
               <img src="icon-check.svg" alt="" style={{width:"15px",position:"absolute",top:"3px"}}/>
              </div>
            <s>{mutableTodo.todo}</s></div>)
            :(
            <div>
              <div className="input-before"></div>
              <span>{mutableTodo.todo}</span>
            </div>)
        }
      </div>
      <img src={focused?"icon-cross.svg":""} onClick={()=>handleRemove(mutableTodo.id)} />
    </form>
  )
}

export default SingleTodo