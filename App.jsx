

import "./App.css"
import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import "./App.css"
import { useState } from "react"


function App() {

  const [ list, setList ] = useState([
    // { id: 1, todoData: 'todo1', finished: false },
    { id: 2, todoData: 'todo2', finished: true }
  ])

  return (
    <div>
      todo
      <h1 className="heading"> Todo App</h1>
      < hr/>
      
      <AddTodo updateList={(todo) => setList([
        ...list, { id: list.length + 1, todoData: todo, finished: false 
      }])} />
      
      <TodoList list={list} setList={setList}/>
    </div>
  )
}

export default App