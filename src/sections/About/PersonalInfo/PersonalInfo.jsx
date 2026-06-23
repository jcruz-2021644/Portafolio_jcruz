import { personalInfo } from '../../../data/personalInfo.js'
import './PersonalInfo.css'

function PersonalInfo() {
  return (
    <aside className="personal-info panel" data-animate aria-label="Informacion personal">
      <h3>Detalles</h3>
      <dl>
        <div>
          <dt>Nombre</dt>
          <dd>{personalInfo.name}</dd>
        </div>
        <div>
          <dt>Edad</dt>
          <dd>{personalInfo.age}</dd>
        </div>
        <div>
          <dt>Ubicacion</dt>
          <dd>{personalInfo.location}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </dd>
        </div>
        <div>
          <dt>Formacion</dt>
          <dd>{personalInfo.education}</dd>
        </div>
        <div>
          <dt>Experiencia</dt>
          <dd>{personalInfo.experience}</dd>
        </div>
        <div>
          <dt>Disponibilidad</dt>
          <dd>{personalInfo.availability}</dd>
        </div>
      </dl>
    </aside>
  )
}

export default PersonalInfo
