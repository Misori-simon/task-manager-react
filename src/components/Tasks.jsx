import React from 'react'


function taskLayout(task) {
    return (
        <div className='task-item'>
            <div className='task-preview'>
                <div className='task-preview-left'>
                    <div className='completed'>
                        <input type='checkbox' checked={task.completed ? 'Checked' : ''} />
                    </div>
                    <div className='task-info'>
                        <h3 className='task-title'>{task.title}</h3>
                        <div className='task-data'>
                            <p className='task-group'>{task.parent}</p>
                            <p className='task-dueDate'>{task.dueDate}</p>
                            <p className='task-priority'>{task.priority}</p>
                        </div>
                    </div>
                </div>
                <div className='star'>
                    <input type='checkbox' checked={task.completed ? 'Checked' : ''} />
                </div>
            </div>
            <div className='task-complete-info'>
                <p className='task-desc'>{task.desc}</p>
            </div>
        </div>
    )
}

function Tasks({taskArr}) {
    return (
        <div className='task-group'>
            {taskArr.map((task) => taskLayout(task))}
        </div>
    )
}

export default Tasks