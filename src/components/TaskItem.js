import React from 'react'
import { FaTimes } from "react-icons/fa";

const TaskItem = ({task}) => {
    return (
        <div className="task">
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <FaTimes />
        </div>
    )
}

export default TaskItem
