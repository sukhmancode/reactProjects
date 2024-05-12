import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import InputField from './components/InputField'
import Information from './components/Information'
import TodoList from './components/TodoList'
import { Todo } from './model'

const App=() => {
  const [lightmode,setLightmode]=useState<boolean>(false)
  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<Todo[]>([]) 
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);


  
  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.isDone));

        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.isDone));

        default:
          return setFilteredTodos(todos);
      }
    };
    handleFilter();
  }, [todos, filterStatus]);
  return (
    <>
      <div className="main-root">
        <Header lightmode={lightmode} setLightmode={setLightmode}/>
        <InputField todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        <Information todos={todos} setTodos={setTodos} 
        filterStatus={filterStatus} setFilterStatus={setFilterStatus}
       />

    
      </div>
    </>
  )
}

export default App
