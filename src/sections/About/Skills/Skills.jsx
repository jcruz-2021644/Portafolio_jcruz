import { skillGroups } from '../../../data/skills.js'
import SkillBar from './SkillBar.jsx'
import './Skills.css'

function Skills() {
  return (
    <article className="skills panel" data-animate>
      <div className="skills__heading">
        <div>
          <p className="skills__kicker">Banco de skills</p>
          <h3>Habilidades técnicas y herramientas</h3>
        </div>
        <p>
          Clasificadas por área para mostrar con claridad mi nivel actual,
          herramientas usadas y tecnologías en proceso.
        </p>
      </div>

      <div className="skills__groups">
        {skillGroups.map((group) => (
          <section className="skills__group" key={group.title} aria-labelledby={`skill-${group.title}`}>
            <div className="skills__group-heading">
              <h4 id={`skill-${group.title}`}>{group.title}</h4>
              <p>{group.description}</p>
            </div>
            <ul className="skills__list">
              {group.skills.map((skill) => (
                <SkillBar key={`${group.title}-${skill.name}`} skill={skill} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  )
}

export default Skills
