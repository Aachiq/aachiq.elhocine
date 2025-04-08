import uniqid from 'uniqid'
import '../ProjectContainer/ProjectContainer.css'

const BlogContainer = ({ project }) => (
    <div className='project' style={{ margin: '10px' }}>
        <h3 className='project-title'>{project.name}</h3>
        <img src={`/cleanfolio/images/${project.image}`} alt='project_img' width="400px" height="200px" />
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
                {/* {project.linkPreview} */}
                Read More ...
            </a>
        )}
    </div>
)

export default BlogContainer
