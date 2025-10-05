import React from "react";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task._id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button onClick={() => onUpdate(task._id, { completed: !task.completed })}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
