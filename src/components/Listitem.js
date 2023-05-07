import React from "react";
import "./listitem.css";
import { GoCheck } from "react-icons/go";

const Listitem = ({ text, deleteTodo, isChecked, toggleChecked }) => {
  return (
    <div className="todo">
      <div
        className={`${isChecked ? "todo_radio" : "todo_radio_unchecked"}`}
        onClick={toggleChecked}
      >
        {isChecked && <GoCheck />}
      </div>

      <div className={`${isChecked ? "todo_text_checked" : "todo_text"}`}>
        {text}
      </div>

      <div className="todo_delete" onClick={deleteTodo}>
        🗑️
      </div>
    </div>
  );
};

export default Listitem;
