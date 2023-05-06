import React from "react";
import "./App.css";
import { AiOutlineEnter } from "react-icons/ai";
import Listitem from "./components/Listitem";

const App = () => {
  return (
    <div className="App">
      <div className="App_todo">
        {/* <h1 className="App_title">TODOLIST</h1> */}
        <form className="App_input_warpper">
          <input type={"text"} className="App_input" />
          <div className="App_input_button">
            <AiOutlineEnter size={20} />
          </div>
        </form>
        <div className="App_todo_list">
          <Listitem />
        </div>
      </div>
    </div>
  );
};

export default App;
