

import "./App.css"
import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
function App() {
  return (
    <div>
      todo
      <h1 className="heading"> Todo App</h1>
      < hr/>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default App