import React, { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineEnter } from "react-icons/ai";
import Listitem from "./components/Listitem";

const App = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();

    const todoItem = {
      id: new Date().getTime(),
      text: todo,
      isChecked: false,
    };

    if (todo !== "") {
      setAllTodos([...allTodos].concat(todoItem).reverse());
      setTodo("");
    }
    console.log(allTodos);
  };

  const getAllTodos = () => {
    let stored = JSON.parse(localStorage.getItem("todo"));

    if (stored) {
      setAllTodos(stored);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <div className="App">
      <div className="App_todo">
        {/* <h1 className="App_title">TODOLIST</h1> */}
        <form className="App_input_warpper" onSubmit={addTodo}>
          <input
            type={"text"}
            className="App_input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <div className="App_input_button" onClick={addTodo}>
            <AiOutlineEnter size={20} />
          </div>
        </form>
        <div className="App_todo_list">
          {allTodos.map((todo) => (
            <Listitem text={todo.text} isChecked={todo.isChecked} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
