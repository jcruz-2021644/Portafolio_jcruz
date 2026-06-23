import { SkillIcon } from './skill-icons.jsx'

function SkillLogo({ skill }) {
  const hasSvgIcon = Boolean(skill.icon)

  return (
    <span
      className={`skill-logo ${skill.dark ? 'skill-logo--dark' : ''} ${hasSvgIcon ? 'skill-logo--svg' : ''}`}
      style={{ '--skill-color': skill.color }}
      aria-hidden={hasSvgIcon ? undefined : 'true'}
    >
      {hasSvgIcon ? <SkillIcon icon={skill.icon} label={skill.name} /> : skill.logo}
    </span>
  )
}

function SkillBar({ skill }) {
  const label = skill.status ?? `${skill.level}%`

  return (
    <li className={skill.status ? 'skill-bar skill-bar--progress' : 'skill-bar'}>
      <SkillLogo skill={skill} />
      <div className="skill-bar__header">
        <div>
          <span>{skill.name}</span>
          <div className="skill-bar__track" aria-hidden="true">
            <span style={{ width: `${skill.level}%` }} />
          </div>
        </div>
        <strong>{label}</strong>
      </div>
    </li>
  )
}

export default SkillBar
