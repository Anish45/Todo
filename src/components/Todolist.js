import React from "react";
import Todo from './Todo'

const Todolist = ({todos , setTodos, filters}) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filters.map(todo => (
            <Todo todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} todo={todo}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
