import React from 'react'


function taskLayout(task, index) {
    return (
        <div className={'task-item  task-' + index}  key={index}>
            <div className='task-preview' onClick={() => toogleInfo(index)}>
                <div className='task-preview-left'>
                    <div className='completed'>
                        {/* <input type='checkbox' checked={task.completed ? 'Checked' : ''} /> */}
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
                    {/* <input type='checkbox' checked={task.completed ? 'Checked' : ''} /> */}
                </div>
            </div>
            <div className='task-complete-info' name={'task-info-' + index}>
                <p className='task-desc'>{task.desc}</p>
            </div>
        </div>
    )
}

function Tasks({taskArr}) {
    return (
        <div className='task-group'>
            {taskArr.map((task, index) => taskLayout(task, index))}
        </div>
    )
}

function toogleInfo(taskIndex) {
    let target = document.getElementsByName('task-info-' + taskIndex)[0]
    console.log('target >>>')
    console.log(target)
    if (target.classList.contains('hide')) {
        target.classList.remove('hide')
    } else {
        target.classList.add('hide')
    }
}

export default Tasks