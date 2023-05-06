import React from "react";
import "./listitem.css";
import { GoCheck } from "react-icons/go";

const Listitem = () => {
  return (
    <div className="todo">
      <div className="todo_radio">
        <GoCheck />
      </div>

      <div className="todo_text">Testing text</div>

      <div className="todo_delete">🗑️</div>
    </div>
  );
};

export default Listitem;
