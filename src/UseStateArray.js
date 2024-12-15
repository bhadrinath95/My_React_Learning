import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => setTasks([...tasks, `Task ${tasks.length + 1}`]);

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
