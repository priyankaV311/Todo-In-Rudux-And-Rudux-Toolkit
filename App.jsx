
import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import "./App.css"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { addTodo, deleteTodo, finishedTodo, editTodo } from "./actions/TodoAction";
import TodoReducers, { addTodo, deleteTodo, editTodo, finishTodo } from './slices/todoSlices';


function App() {

  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo, finishTodo, editTodo }, dispatch);
  
  return (

    <>
      <h1 className="heading">Todo App</h1>
      <hr />
      <AddTodo addTodo={actions.addTodo} />
      <TodoList deleteTodo={actions.deleteTodo} finishedTodo={actions.finishedTodo} editTodo={actions.editTodo} />
    </>
  )
}

export default App