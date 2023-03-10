import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import AddTodo from './components/AddTodo'


function App() {
  const [todos, setTodos] = useState([]);
  
  
  return (
    
    <div className="App">




      <Header/>
      <AddTodo
        todos={todos}
        setTodos={setTodos}
        />

        {todos.map((todo) => 
        <div>{todo.text}</div>)}    


      
      
    </div>
  );
}

export default App;
