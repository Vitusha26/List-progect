import React from 'react'
import { ImPlus } from "react-icons/im";

export default function Input(props) {
  return (
    <div>
    <input 
          type="text"
          className="inpText"
          value={props.text}
          onChange={(e) => {props.setText(e.target.value)}}
          placeholder="Type an item"
        />

        <button onClick={props.handleSubmit} className='plusAndDel'>
          <ImPlus />
        </button>
    </div>
  )
}
