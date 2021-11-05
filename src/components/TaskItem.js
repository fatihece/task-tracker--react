import React from 'react'
import { FaTimes } from "react-icons/fa";

const TaskItem = ({task, onDelete, toggleDone}) => {
    return (
        <div className={`task ${task.isDone ? "done" : ""} `}
            onDoubleClick={() => toggleDone(task.id)}>
            <h3>{task.text}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default TaskItem
