import { useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { initialState } from "./store/initialState";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState(initialState)

  // Create a task
  const onCreate = (task, day, isDone) => {
    setTasks([...tasks, {id:uuidv4(), ...task, ...day, isDone }])
  }

  // Delete a task
  const onDelete = (id) => {
    setTasks(tasks.filter((task)=>(task.id !== id))) // set if the ids not equal
  }

  // Toggle Done

  // Toggle Show Hide
  
  return (
    <div className="container">
      <Header title={"Task Tracker"} />
      <CreateTask onCreate={onCreate}/>
      <TaskList tasks={tasks} onDelete={onDelete }/>
    </div>
  );
}

export default App;
