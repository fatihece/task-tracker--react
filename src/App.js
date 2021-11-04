import { useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { initialState } from "./store/initialState";
 

function App() {
  const [tasks, setTasks] = useState(initialState)

  // Create a task

  // Delete a task
  const onDelete = (id) => {
    setTasks(tasks.filter((task)=>(task.id !== id))) // set if the ids not equal
  }

  // Toggle Done

  // Toggle Show Hide
  
  return (
    <div className="container">
      <Header title={"Task Tracker"} />
      <CreateTask />
      <TaskList tasks={tasks} onDelete={onDelete }/>
    </div>
  );
}

export default App;
