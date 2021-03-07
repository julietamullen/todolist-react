import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  const handleFilter = () => {
    switch(status){
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFiltered(todos)
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos)
    }
  }

  useEffect(() => {getLocalTodos()}, [])
  useEffect(()=> {handleFilter(); saveLocalTodos()}, [todos, status])

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form
        // Make these accesible in the components
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Todolist 
      todos={todos} 
      setTodos={setTodos}
      filtered={filtered} />
    </div>
  );
}

export default App;
