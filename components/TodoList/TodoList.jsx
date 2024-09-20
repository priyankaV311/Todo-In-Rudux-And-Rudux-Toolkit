// import React, { useContext } from 'react';
import Todo from '../Todo/Todo';
// import TodoContext from '../../context/TodoContext';
// import TodoDispatchContext from "../../context/TodoDispatchContext";
import { useSelector } from 'react-redux';


function TodoList({ deleteTodo, finishedTodo, editTodo}) {
    // const { list, setList } = useContext(TodoContext);
    // const { list } = useContext(TodoContext);
    // const { dispatch } = useContext(TodoDispatchContext)


    // function onFinished(todo, isFinished) {
    //     dispatch({ type: 'finish_todo', payload: { todo, isFinished: isFinished } });
    // }
    const list = useSelector((state) => state.todo);

    // function onDelete(todo) {
    //     dispatch({ type: 'delete_todo', payload: { todo } });
    // }

    function onFinished(todo, isFinished) {
        finishedTodo(todo, isFinished);
    }


    // function onEdit(todo, todoText) {
    //     dispatch({ type: 'edit_todo', payload: { todo, todoText } });
    // }
    function onDelete(todo) {
        deleteTodo(todo);
    }
    function onEdit(todo, todoText) {
        editTodo(todo, todoText);
    }
  
    return (
        <div>
            {list.length > 0 && list.map((todo) => (
                <Todo 
                    key={todo.id} 
                    id={todo.id} 
                    todoData={todo.todoData} 
                    isFinished={todo.finished}
                    changeFinished={(isFinished) => onFinished(todo, isFinished)}
                    onDelete={() => {onDelete(todo)}} 
                    onEdit={(todoText) => onEdit(todo, todoText)}
                />
            ))}
        </div>
    );
}

export default TodoList;
