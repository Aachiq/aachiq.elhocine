import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project' style={{ margin: '10px' }}>
    <h3 className='project-title'>{project.name}</h3>
    <img src={`/cleanfolio/images/${project.image}`} alt='project_img' width='100%' />
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.linkPreview && (
      <a
        href={project.linkPreview}
        // aria-label='source code'
        className='link link--icon'
        target='blank'
      >
        {project.linkPreview}
      </a>
    )}
  </div>
)

export default ProjectContainer
