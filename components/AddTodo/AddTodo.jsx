
import React, { useContext } from 'react'
import { useState } from "react";
import "./AddTodo.css";
import TodoContext from '../../context/TodoContext';



function AddTodo({ updateList }) {
    const [ inputText, setInputText ] = useState('');
    const { dispatch } = useContext(TodoContext);

  return (
    <div className="add-weapper">
        <input 
        className="input"
        type="text"
        placeholder="Enter a new todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />

<button onClick={ () => {
            // updateList(inputText);
            dispatch({ type: 'add_todo', payload: { todoData: inputText}
            });
            setInputText('');
        }}>Add</button>

    </div>
  )
}

export default AddTodo