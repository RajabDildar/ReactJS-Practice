// components/TaskForm.jsx
import "./TodoList2.css";
import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onAddTask(inputVal);
      setInputVal("");
    }
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="inputBox"
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Add New Task"
      />
      <button className="submitBtn" type="submit">
        Add
      </button>
    </form>
  );
}
