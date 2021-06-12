import React from "react";

const Form = ({setTodo, todos, setTodos, todo, setFilter}) => {
  const todoHandler = e  => {
    setTodo(e.target.value);
  }
  const submitTodoHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos, {text: todo, completed: false, id: Math.random() * 100}
    ])
    setTodo("");
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div>
      <form>
        <input value={todo} onChange={todoHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={handleFilter} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
