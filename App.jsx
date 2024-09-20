
import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import "./App.css"
import { useState } from "react"
import TodoContext from "./context/TodoContext"


function App() {

  const [ list, setList ] = useState([
    { id: 1, todoData: 'todo1', finished: false },
    { id: 2, todoData: 'todo2', finished: true }
  ])

  return (
    
    <TodoContext.Provider value={{ list, setList }}>
    <h1 className="heading">Todo App</h1>
    <hr />
    < AddTodo updateList={(todo) => setList ([
      ...list, {id: list.length + 1, todoData:todo, finished:false
      }])}/>
    {/* <TodoList list={list} setList={setList} /> */}
  
    <TodoList/>
  </TodoContext.Provider>
      
      
      
    
  )
}

export default App