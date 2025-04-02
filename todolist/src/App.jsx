import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [doneTasks, setDoneTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setDoneTasks(doneTasks.filter(i => i !== index));
  };

  const markAsDone = (index) => {
    if (!doneTasks.includes(index)) {
      setDoneTasks([...doneTasks, index]);
    }
  };

  const editTask = (index) => {
    const newTask = prompt("Edit task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
      const updatedTasks = tasks.map((t, i) => (i === index ? newTask : t));
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={doneTasks.includes(index) ? 'done' : ''}>
            <span>{t}</span>
            <div>
              <button onClick={() => markAsDone(index)}>Done</button>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
