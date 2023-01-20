import React, { useState } from "react";

const AddTodo = () => {

    const [todo, setTodo] = useState("");

    return (
        <form>
        <input type="text" name = "todo" value={todo} placeholder = "Add Item" onChange={(e) => {setTodo(e.target.value)}} />
        <button className='add-button'>+</button>
      </form>
    );
};

export default AddTodo;