import React, { useState, useEffect } from "react";
import './style.css'
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App(){

  //states
  const [inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState('all');
  const[filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setfilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  }

  //Save to local storage
  const saveLocalTodos = () =>{
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem("todos") == null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todoFromLocal = localStorage.getItem("todos", JSON.stringify(todos));
      console.log(todoFromLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Omar's Todo List </h1>
      </header>
      <Form todos = {todos} setTodos = {setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}  />
    </div>
  )
}

export default App;
