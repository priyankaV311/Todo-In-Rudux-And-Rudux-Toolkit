
import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import "./App.css"
// import { useState } from "react"
import TodoContext from "./context/TodoContext"
import { useReducer, useState } from "react"
import todoReducer from "./reducers/TodoReducers"
import TodoDispatchContext from "./context/TodoDispatchContext"


function App() {

  // const [ list, setList ] = useState([
  //     { id: 1, todoData: 'todo1', finished: false },
  //     { id: 2, todoData: 'todo2', finished: true }
  //   ])
  
    const [list, dispatch] = useReducer(todoReducer, []);
    return (

      <TodoContext.Provider value={{ list }}>
        <TodoDispatchContext.Provider value={{ dispatch }}>
          <h1 className="heading">Todo App</h1>
          <hr />
          <AddTodo/>
          <TodoList/>
        </TodoDispatchContext.Provider>
      </TodoContext.Provider>
    )
  }

export default App