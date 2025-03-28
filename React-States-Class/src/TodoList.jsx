import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList2() {
  let [inputVal, setInputVal] = useState("");
  let [tasksList, setTasksList] = useState([]);

  let handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputVal.trim()) {
      setTasksList((currTasks) => [
        ...currTasks,
        { task: inputVal, id: uuidv4(), isDone: false },
      ]);
      setInputVal("");
    }
  };

  let handleDelete = (taskId) => {
    setTasksList((currTasks) => {
      return currTasks.filter((task) => task.id != taskId);
    });
  };

  let upperCaseAll = () => {
    setTasksList((currVal) => {
      return currVal.map((task) => {
        return { ...task, task: task.task.toUpperCase() };
      });
    });
  };

  let delAllTasks = () => {
    setTasksList((currVal) => []);
  };

  let changeStatus = (taskId) => {
    setTasksList((currVal) =>
      currVal.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  let changeStatusForAll = () => {
    setTasksList((currVal) => {
      return currVal.map((task) => {
        return { ...task, isDone: true };
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Write Task"
          value={inputVal}
        />
        <button type="submit">Add</button>
      </form>
      <h2>All Tasks</h2>
      <ol>
        {tasksList.map((newTask) => (
          <>
            {newTask.task && (
              <li key={newTask.id}>
                <span
                  style={{
                    textDecoration: newTask.isDone ? "line-through" : "none",
                  }}
                >
                  {newTask.task}
                </span>
                <button onClick={() => handleDelete(newTask.id)}>Delete</button>
                <button onClick={() => changeStatus(newTask.id)}>
                  {newTask.isDone ? "Undone" : "Done"}
                </button>
              </li>
            )}
          </>
        ))}
      </ol>
      <br />
      <button onClick={upperCaseAll}>Uppercase All</button>
      <button onClick={delAllTasks}>Delete All</button>
      <button onClick={changeStatusForAll}>Done All</button>
    </div>
  );
}
