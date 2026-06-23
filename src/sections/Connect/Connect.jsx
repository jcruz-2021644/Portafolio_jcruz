import { BriefcaseBusiness, GitBranch, Mail, Search } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo.js'
import './Connect.css'

function Connect() {
  return (
    <section className="connect-section section" id="contacto" aria-labelledby="contact-title">
      <div className="connect-section__content" data-animate>
        <p className="eyebrow">Contacto</p>
        <h2 id="contact-title">Construyamos algo juntos</h2>
        <p>
          Estoy listo para seguir aprendiendo, participar en practicas y aportar
          en proyectos donde el orden, la comunicacion y el diseno importen.
        </p>
      </div>

      <address className="connect-section__links" data-animate>
        <a className="button button--primary" href={`mailto:${personalInfo.email}`}>
          <Mail aria-hidden="true" size={18} />
          Enviar correo
        </a>
        <a className="button button--ghost" href={personalInfo.links.github}>
          <GitBranch aria-hidden="true" size={18} />
          GitHub
        </a>
        <a className="button button--ghost" href={personalInfo.links.linkedin}>
          <BriefcaseBusiness aria-hidden="true" size={18} />
          LinkedIn
        </a>
        <a className="button button--coral" href={personalInfo.links.computrabajo}>
          <Search aria-hidden="true" size={18} />
          CompuTrabajo
        </a>
      </address>
    </section>
  )
}

export default Connect
