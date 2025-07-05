import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project, isPersonnalProj }) => (
  <div className='project' style={{ margin: '10px' }}>
    <h3 className='project-title'>{project.name}</h3>
    <img src={`/aachiq.elhocine/images/${project.image}`} alt='project_img' width='100%' />
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
        style={{ marginTop: '5px', color: "var(--clr-primary)", fontWeight: 500 }}
      >
        {isPersonnalProj ? "Demo Link" : project.linkPreview}
      </a>
    )}
  </div>
)

export default ProjectContainer
