import { projects } from '../../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

function Projects() {
  return (
    <section className="projects-section section" id="proyectos" aria-labelledby="projects-title">
      <div className="section-heading" data-animate>
        <p className="eyebrow">Trabajo reciente</p>
        <h2 id="projects-title">Proyectos</h2>
      </div>

      <div className="projects-section__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
