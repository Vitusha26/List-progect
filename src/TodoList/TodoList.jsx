import React, { useState } from 'react'
import AddTodoItem from './AddTodoItem';
import TodoListItem from './TodoListItem';


export default function TodoList() {

    const [todos, setTodos] = useState([
      {
        id: "962c6353-f26c-4549-91ca-03961427593c",
        text: "Breakfast",
      },
      {
        id: "e1e917ac-34d0-4bd1-a621-5a6f61b758e2",
        text: "Go running",
      },
      {
        id: "c3a755cb-8dc6-4fc0-a9d2-6cf0d3176203",
        text: "Play computer games",
      },
      {
        id: "c4a755cb-8dc6-4fc0-a9d2-6cf0d3176203",
        text: "Dinner with friend",
      },
    ]);
  
    const addTodo = (text) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
    
    const removeTodo = (index) => {
      setTodos(todos.filter(p=> p.id !== index.id))
    };
  
    return (
        <div className="container">
          <AddTodoItem addTodo={addTodo}/>
          
          {todos.map((todo) => (
            <TodoListItem 
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
            /> 
          ))}
        </div>
    ); 
}
