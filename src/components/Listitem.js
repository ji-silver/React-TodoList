import React from "react";
import "./listitem.css";
import { GoCheck } from "react-icons/go";

const Listitem = ({ text, deleteTodo, isChecked, toggleChecked }) => {
  return (
    <div className="todo">
      <div className="todo_radio" onClick={toggleChecked}>
        {isChecked && <GoCheck />}
      </div>

      <div className="todo_text">{text}</div>

      <div className="todo_delete" onClick={deleteTodo}>
        🗑️
      </div>
    </div>
  );
};

export default Listitem;
