import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { initialState } from "./store/initialState";
import { v4 as uuidv4 } from "uuid";
import { MainContext } from "./context/context";

function App() {
  const [tasks, setTasks] = useState(initialState);

  // Create a task
  const onCreate = (task, day, isDone) => {
    setTasks([...tasks, { id: uuidv4(), ...task, ...day, isDone }]);
  };

  // Delete a task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // set if the ids not equal
  };

  // Toggle Done
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const data = {
    tasks,
    setTasks,
    onCreate,
    onDelete,
    toggleDone,
  };

  return (
    <MainContext.Provider value={data}>
      <div className="container">
        <Header />
        <CreateTask onCreate={onCreate} />

        {tasks.length > 0 ? <TaskList /> : <p>No Task to show</p>}
      </div>
    </MainContext.Provider>
  );
}

export default App;
