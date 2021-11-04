import React from 'react'
import { FaTimes } from "react-icons/fa";

const TaskItem = ({task, onDelete}) => {
    return (
        <div className="task">
            <h3>{task.text}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={(id) => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default TaskItem
