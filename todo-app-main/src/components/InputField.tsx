import React from 'react'
import { Todo } from '../model'

type Props={
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const InputField:React.FC<Props> = ({todo,setTodo,todos,setTodos}:Props) => {
    
    const handleAdd=(e:React.FormEvent)=>{
      e.preventDefault()
        if(todo){
           setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
           setTodo("")
        }
    }
  return (
    <form className='input-field' onSubmit={(e)=>handleAdd(e)}>
        <div className='input-before'></div>
        <input value={todo}  type="text" placeholder='Create a new todo... ' onChange={(e)=>setTodo(e.target.value)} />
    </form>
  )
}

export default InputField