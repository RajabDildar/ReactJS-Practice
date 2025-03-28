// components/TaskItem.jsx
import "./TodoList2.css";
export default function TaskItem({ task, onDelete, onStatusChange }) {
  return (
    <li className="taskList">
      <p style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
        {task.task}
      </p>
      <div>
        <button className="delBtn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <button className="doneBtn" onClick={() => onStatusChange(task.id)}>
          {task.isDone ? "Undone" : "Done"}
        </button>
      </div>
    </li>
  );
}
