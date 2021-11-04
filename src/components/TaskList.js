import React from 'react'

const TaskList = ({tasks}) => {
    return (
        <div>
            {
                tasks.map((item) => (
                    <div>{item.text}</div>
                ))
            }
        </div>
    )
}

export default TaskList
