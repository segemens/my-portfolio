import React from 'react'

function ProjectCard({ title, description, technologies, githubLink, image }) {
  return (
    <div className='card h-100'>
        
        {image && (
            <img src={image} alt={title} style={{ height: '180px', objectFit: 'cover' }} className='card-img-top' />
        )}

        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className='card-text'>{description}</p>

            <p>
                <strong>Kullanılan Teknolojiler:</strong>
            </p>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            {githubLink ? (
                <a href={githubLink} target='_blank' rel="noopener noreferrer" className='btn btn-dark'>GitHub</a>
            ) : (
                <span className='text-muted'>GitHub Linki Yakında Eklencek</span>
            )}
        </div>
    </div>
  )
}

export default ProjectCard