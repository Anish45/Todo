import React from "react";
import "./App.css";
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [filter, setFilter] = React.useState("all");
  const [filters, setFilters] = React.useState([]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }

  React.useEffect(() => {
    getLocalTodos();
  }, [])
  React.useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filter])

  const filterHandler = () => {
    switch(filter){
      case "completed":
        setFilters(todos.filter(todo => todo.completed=== true));
        break;
      case "uncompleted":
        setFilters(todos.filter(todo => todo.completed=== false));
        break;
      default:
        setFilters(todos)
        break;
    }
  }
  return <div className="App">
    <header>
      <h1>Anish's Todo List</h1>
    </header>
    <Form todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} filter={filter} setFilter={setFilter}/>
    <Todolist todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} filters={filters}/>
  </div>;
}

export default App;
