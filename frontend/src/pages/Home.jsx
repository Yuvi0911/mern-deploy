import React, { useState, useEffect } from "react";
import API from "../api";
import TaskList from "../components/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const updateTask = async (id, data) => {
    await API.put(`/tasks/${id}`, data);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <form onSubmit={addTask}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add task..." />
        <button type="submit">Add</button>
      </form>
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
};

export default Home;
