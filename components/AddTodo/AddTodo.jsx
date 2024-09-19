
import React from 'react'

function AddTodo() {
  return (
    <div className="add-weapper">
        <input 
        className="input"
        type="text"
        placeholder="Enter a new todo..."
        />

        <button>Add</button>

    </div>
  )
}

export default AddTodo