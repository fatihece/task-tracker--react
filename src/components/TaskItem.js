import React from "react";
import { FaTimes } from "react-icons/fa";
import { MainContext, useContext } from "../context/context";

const TaskItem = () => {
  const { tasks, onDelete, toggleDone } = useContext(MainContext);

  return (
    <>
      {tasks.map((task) => (
        <div
          className={`task ${task?.isDone ? "done" : ""}`}
          onDoubleClick={() => toggleDone(task?.id)}
        >
          <h3>
            {task?.text}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task?.id)}
            />
          </h3>
          <p>{task?.day}</p>
        </div>
      ))}
    </>
  );
};

export default TaskItem;
