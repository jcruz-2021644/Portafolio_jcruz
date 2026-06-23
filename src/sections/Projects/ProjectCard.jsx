import { ArrowUpRight, Code2, Eye } from 'lucide-react'

function ProjectCard({ project }) {
  const images = project.images ?? (project.image ? [project.image] : [])

  return (
    <article className="project-card" data-animate>
      {images.length > 0 ? (
        <figure className="project-card__preview project-card__preview--carousel">
          <div className="project-card__slides">
            {images.map((image, index) => (
              <img
                key={`${project.title}-${image}-${index}`}
                src={image}
                alt={`Vista ${index + 1} de ${project.title}`}
              />
            ))}
          </div>
          <figcaption className="project-card__dots" aria-hidden="true">
            {images.map((image, index) => (
              <span key={`${image}-dot-${index}`} />
            ))}
          </figcaption>
        </figure>
      ) : (
        <div className="project-card__preview" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}
      <p className="project-card__category">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="project-card__learned">
        <strong>Aprendizaje:</strong> {project.learned}
      </p>
      <ul className="project-card__tags" aria-label={`Tecnologias de ${project.title}`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-card__links">
        <a href={project.link}>
          <Eye aria-hidden="true" size={16} />
          Demo
        </a>
        <a href={project.repository}>
          <Code2 aria-hidden="true" size={16} />
          Codigo
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
