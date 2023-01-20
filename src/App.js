import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    
    <div className="App">

      <Header/>
      <form>
        <input type="text" name = "todo" value={todo} placeholder = "Add Item" onChange={(e) => {setTodo(e.target.value)}} />
        <button className='add-button'>+</button>
      </form>


      
      
    </div>
  );
}

export default App;
