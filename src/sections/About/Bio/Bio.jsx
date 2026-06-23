import { personalInfo } from '../../../data/personalInfo.js'
import './Bio.css'

function Bio() {
  return (
    <article className="bio panel" data-animate>
      <h3>Biografia</h3>
      <p>{personalInfo.about}</p>
      <p>
        Mi objetivo es seguir creciendo como frontend, dominar mejores practicas
        y entregar proyectos que combinen orden tecnico con una presentacion
        visual atractiva.
      </p>
      <div className="bio__highlights" aria-label="Fortalezas principales">
        <span>Responsable</span>
        <span>Detallista</span>
        <span>En aprendizaje constante</span>
      </div>
    </article>
  )
}

export default Bio
