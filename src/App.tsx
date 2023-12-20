/*

import React, { useState } from "react";
import "./App.css"; // Add your styling here

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { id: tasks.length + 1, title, completed: false }]);
  };

  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button
              onClick={() =>
                editTask(task.id, prompt("Enter new title:", task.title))
              }
            >
              Edit
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.elements.title.value;
          addTask(title);
          e.target.elements.title.value = "";
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Enter task title"
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default App;
*/
