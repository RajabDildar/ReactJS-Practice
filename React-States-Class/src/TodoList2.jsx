// TodoList2.jsx
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import BulkActions from "./BulkActions";

export default function TodoList2() {
  const [tasksList, setTasksList] = useState([]);

  const handleAddTask = (taskText) => {
    setTasksList((currTasks) => [
      ...currTasks,
      { task: taskText, id: uuidv4(), isDone: false },
    ]);
  };

  const handleDelete = (taskId) => {
    setTasksList((currTasks) => currTasks.filter((task) => task.id !== taskId));
  };

  const delAllTasks = () => {
    setTasksList([]);
  };

  const changeStatus = (taskId) => {
    setTasksList((currVal) =>
      currVal.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const changeStatusForAll = () => {
    setTasksList((currVal) =>
      currVal.map((task) => ({ ...task, isDone: true }))
    );
  };

  return (
    <div className="todoContainer">
      <h1>
        Todo List <i className="fa-solid fa-list-check"></i>
      </h1>
      <TaskForm onAddTask={handleAddTask} />
      <h2>All Tasks</h2>
      <ol>
        {tasksList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onStatusChange={changeStatus}
          />
        ))}
      </ol>
      <BulkActions
        onDeleteAll={delAllTasks}
        onMarkAllDone={changeStatusForAll}
      />
    </div>
  );
}
