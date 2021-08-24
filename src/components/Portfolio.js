import React from 'react';

export default function Portfolio(props) {
        return (
            <div>
            <div>
            <h1 className="connect font text-center text-header">Some of my codes</h1>
            <h1><i class="margin-icon fas fa-code icon"></i></h1>
            </div>
            <div className='container row col-12 portfolio center'>
            {props.projects.map((project) => {
            return (
            <div className="project-container col-3 d-none d-lg-block" key={project.id}>
            <div><strong>{project.name}:</strong></div>
            <div className="small">{project.description}</div>
            <img href={project.link} alt={project.name} src={project.picture}  className='img-thumbnail card-imag-top'/>
            <a href={project.link} class="stretched-link"></a>
            </div> 
            )})}
            </div>
            </div> 
            )
}