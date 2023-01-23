import React, { useState } from "react";

const AddTodo = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

   function submitHandler (e) {
    e.preventDefault()

    const newTodo = {
        text: todo,
        completed: false,
    }
    setTodos ([...todos].concat(newTodo))
    setTodo("") 
   }


    return (
       <><form onSubmit={submitHandler}>
            <input type="text" onchange ={(e) => setTodo(e.taget.value )} name="todo" value={todo} placeholder="Add Item" onChange={(e) => { setTodo(e.target.value); } } />
            <button className='add-button'>+</button>
        </form>
        
       {todos.map((todo) => 
        <div>{todo.text}</div>)}

        </>
        
    );
};

export default AddTodo;