import React from "react";
import { useDispatch } from "react-redux";
import { todoRemoved } from "./todosSlice";

function Todo({ todo }) {
  const dispatch = useDispatch()
  function handleDeleteClick(){
    dispatch(todoRemoved(todo.id))
  }
  return (
    <li>
      <span>{text}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Todo;
