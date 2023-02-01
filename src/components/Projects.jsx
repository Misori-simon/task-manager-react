import React from 'react'
import Tasks from './Tasks'

function projectLayout (project, index) {
    return (
        <div className='project-item' key={index}>
            <div className='project-preview'>
                <div className='project-title-wrap'>
                    <span className='project-icon'> i </span>
                    <h3 className='project-title'>{project.title}</h3>
                </div>
                <div className='project-count'>
                    <p className='project-tasks-count'>{project.tasks.length}</p>
                </div>
            </div>
        </div>
    )
}

function Project({project}) {
    return (
        <div className='project-wrap'>
            <div className='project-info'>
                <div className='left'>
                    <h3 className='project-title'>{project.title}</h3>
                    <h3 className='project-month'>December 2020</h3>
                </div>
                <div className='new-task-btn'>
                    <button>new task</button>
                </div>
            </div>
            <Tasks taskArr={project.tasks}/>
        </div>
    )
}

function Projects({projectArr}) {
    return (
        <div className='project-group'>
            {projectArr.map((project, index) => projectLayout(project, index))}
        </div>
    )
}

export {Projects, Project}