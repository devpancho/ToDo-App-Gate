import React, { useState } from "react";

const AddTodo = ({todos, setTodos}) => {

    const [todo, setTodo] = useState("");
    

   function submitHandler (e) {
    e.preventDefault()

    const newTodo = {
        text: todo,
        completed: false,
    }
    setTodos((previous) => [...previous].concat(newTodo));
    setTodo("") 
   }


    return (
       <><form onSubmit={submitHandler}>
            <input type="text" name="todo" value={todo} placeholder="Add Item" onChange={(e) => { setTodo(e.target.value); } } />
            <button className='add-button'>+</button>
        </form>
        
         {todos.map((todo) => 
        <div>{todo.text}</div>)}

        </>
        
    );
};

export default AddTodo;