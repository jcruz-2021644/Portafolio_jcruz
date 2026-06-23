import Bio from './Bio/Bio.jsx'
import PersonalInfo from './PersonalInfo/PersonalInfo.jsx'
import Resume from './Resume/Resume.jsx'
import Skills from './Skills/Skills.jsx'
import './About.css'

function About() {
  return (
    <section className="about-section section" id="sobre-mi" aria-labelledby="about-title">
      <div className="section-heading" data-animate>
        <p className="eyebrow">Perfil</p>
        <h2 id="about-title">Sobre mi</h2>
        <p>
          Una vista clara de quien soy, como trabajo y que puedo aportar como
          desarrollador web en formacion.
        </p>
      </div>

      <div className="about-section__grid">
        <Bio />
        <PersonalInfo />
        <Resume />
        <Skills />
      </div>
    </section>
  )
}

export default About
