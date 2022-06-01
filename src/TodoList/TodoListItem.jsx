import React,{useState} from 'react'
import { MdDelete } from "react-icons/md";

export default function TodoListItem(props) {

  const [checked, setChecked] = useState(false);
    return (
      <div className="list">
        <input className='tick' type="checkbox" onChange={() => setChecked(!checked)}></input>{" "}
        <label className={`${checked ? "checkbox--active" : ""}`}aria-hidden="true">
          {props.todo.text}
        </label>
        <button className='plusAndDel' onClick={() => props.removeTodo(props.todo)}>
          <MdDelete className="deleteIcon" />
        </button>
        
      </div>
    );
  }