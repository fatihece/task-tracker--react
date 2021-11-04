import React from 'react'

const CreateTask = () => {
    return (
        <form className="add-form" >
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            id="task"
            name="text"
            type="text"
            placeholder="Enter a task name"
            // required
            // value={text}
            // onChange={handleTextChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            id="day"
            name="day"
            type="text"
            placeholder="Enter a day and time"
            // required
            // value={day}
            // onChange={handleDayChange}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    )
}

export default CreateTask
