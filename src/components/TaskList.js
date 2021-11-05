import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, onDelete, toggleDone}) => {
    return (
        <div>
            {
                tasks.map((task) => (
                    <TaskItem key={tasks.id} task={task} onDelete={onDelete} toggleDone={toggleDone}/>
                ))
            }
        </div>
    )
}

export default TaskList
