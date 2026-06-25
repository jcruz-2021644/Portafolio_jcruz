import { personalInfo } from '../../../data/personalInfo.js'
import './Bio.css'

function Bio() {
  return (
    <article className="bio panel" data-animate>
      <h3>Biografía</h3>
      <p>{personalInfo.about}</p>
      <p>
        {personalInfo.about2}
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
