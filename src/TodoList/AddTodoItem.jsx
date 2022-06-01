import React, { useState } from 'react'
import { ImPlus } from "react-icons/im";


export default function AddTodoItem({ addTodo }) {
  
    const [value, setValue] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <div className='inpDiv'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inpText"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type an item"
        />

        <button className='plusAndDel'>
          <ImPlus />
        </button>
      </form>
      </div>
    );
  }

