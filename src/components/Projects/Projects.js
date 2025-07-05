import uniqid from 'uniqid'
import { personnalProjects, projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Professional Projects</h2>

      <div
        // className='projects__grid'
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} isPersonnalProj={false} />
        ))}
      </div>
      {/* Personnal Projects */}
      <h2 className='section__title'>Personnal Projects</h2>

      <div
        // className='projects__grid'
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {personnalProjects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} isPersonnalProj />
        ))}
      </div>

    </section>
  )
}

export default Projects
