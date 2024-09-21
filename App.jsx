
// import TodoList from "./components/TodoList/TodoList"
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import todoReducer, { addTodo, deleteTodo, editTodo, finishTodo } from './slices/todoSlices';
import { addTodo, deleteTodo, editTodo, finishTodo } from './slices/todoSlices';
import { Toaster, toast } from 'react-hot-toast'; // Import Toaster and toast

function App() {

  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo, finishTodo, editTodo }, dispatch);

  return (

    <>
    <h1 className="heading">Todo App</h1>
    <hr />
    <AddTodo addTodo={actions.addTodo} />
    <TodoList deleteTodo={actions.deleteTodo} finishedTodo={actions.finishedTodo} editTodo={actions.editTodo} />
    <Toaster />
  </>
);
}

// export default App
export default App;