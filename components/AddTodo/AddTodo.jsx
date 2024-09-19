
import React from 'react'
import { useState } from "react";
import "./AddTodo.css";



function AddTodo({ updateList }) {
    const [ inputText, setInputText ] = useState('');
  return (
    <div className="add-weapper">
        <input 
        className="input"
        type="text"
        placeholder="Enter a new todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />

        <button onClick={ () => updateList(inputText)}>Add</button>

    </div>
  )
}

export default AddTodo