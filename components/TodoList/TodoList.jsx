// import React, { useContext } from 'react';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';


function TodoList({ deleteTodo, finishedTodo, editTodo}) {

const list = useSelector((state) => state.todo);
console.log(list);


    function onFinished(todo, isFinished) {
        // finishedTodo(todo, isFinished);
        finishedTodo({todo, isFinished});
    }


    function onDelete(todo) {
        // deleteTodo(todo);
        deleteTodo({todo});
    }


    function onEdit(todo, todoText) {
        // editTodo(todo, todoText);
        editTodo({todo, todo})
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
