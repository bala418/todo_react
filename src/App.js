import logo from "./logo.png";
import "./App.css";
import React from "react";
import { useState } from "react";
import List from "./List";

function App() {
  const [tasks, setTasks] = useState([]);

  const [text, setText] = useState("");

  const addTask = () => {
    if (text !== "") {
      const newTask = {
        id: Date.now(),
        value: text,
        isDone: false,
      };

      console.log(text);
      const list = [...tasks];
      list.push(newTask);
      console.log(list);
      setTasks(list);
      setText("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    let tto;
    tasks.forEach((element) => {
      if (element.id === id) {
        tto = element;
      }
    });
    tto.isDone = !tto.isDone;

    setTasks(tasks.map((task) => (task.id === id ? tto : task)));

    console.log(tasks);
  };

  return (
    <div>
      <img src={logo} alt="" width="100" height="100" className="logo" />
      <h1 className="app-title">A ToDo App</h1>
      <div className="container">
        Add an Item....
        <br />
        <input
          type="text"
          className="input-text"
          placeholder="Write a to do"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="add-btn" onClick={addTask}>
          Add To do
        </button>
        <List tas={tasks} onDelete={deleteTask} togg={toggleTask} />
        {/* <p>{text}</p> */}
      </div>
    </div>
  );
}

export default App;
