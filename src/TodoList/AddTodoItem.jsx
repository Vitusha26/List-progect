import React, { useState } from 'react'
import Input from "./Input";

export default function AddTodoItem({ addTodo }) {
  
    const [text, setText] = useState("");
  
    const handleSubmit = () => {
      const newText = {
        id: Date.now(),
        text
      }
      if(text){
        addTodo(newText)
        setText('')
      }else{
        alert('Please type your todo')
      }
    };
  
    return (
      <div className='inpDiv'>
      <Input handleSubmit={handleSubmit} text={text} setText={setText}/>
      </div>
    );
  }

