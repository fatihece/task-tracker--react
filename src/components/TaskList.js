import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, onDelete}) => {
    return (
        <div>
            {
                tasks.map((task) => (
                    <TaskItem key={tasks.id} task={task} onDelete={onDelete}/>
                ))
            }
        </div>
    )
}

export default TaskList
