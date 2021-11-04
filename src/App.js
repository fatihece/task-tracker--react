import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { initialState } from "./store/initialState";
 

function App() {
  const[tasks, setTasks] = useState(initialState)
  return (
    <div className="container">
      <Header title={"Task Tracker"} />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
