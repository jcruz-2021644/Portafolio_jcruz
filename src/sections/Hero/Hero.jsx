import { ArrowRight, Download, Sparkles } from 'lucide-react'
import jcruz from '../../assets/img/profile/yo_chumpa_kinal.jpeg'
import { personalInfo } from '../../data/personalInfo.js'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section section" id="inicio" aria-labelledby="hero-title">
      <div className="hero-section__content" data-animate>
        <p className="eyebrow">Hola, soy</p>
        <h1 id="hero-title">{personalInfo.name}</h1>
        <p className="hero-section__role">{personalInfo.role}</p>
        <p className="hero-section__summary">{personalInfo.summary}</p>
        <p className="hero-section__phrase">
          <Sparkles aria-hidden="true" />
          {personalInfo.phrase}
        </p>
        <div className="hero-section__actions" aria-label="Acciones principales">
          <a className="button button--primary" href="#proyectos">
            Ver proyectos
            <ArrowRight aria-hidden="true" size={18} />
          </a>
          <a className="button button--ghost" href={personalInfo.links.cv}>
            <Download aria-hidden="true" size={18} />
            CV virtual
          </a>
          <a className="button button--coral" href="#contacto">
            Contactarme
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
        <div className="hero-section__stats" aria-label="Resumen profesional">
          <span><strong>06+</strong> tecnologias</span>
          <span><strong>03</strong> proyectos alojados</span>
          <span><strong>100%</strong> responsive</span>
        </div>
      </div>

      <figure className="hero-section__media" data-animate>
        <div className="hero-section__scanline" />
        <img src={jcruz} alt="Ilustracion principal del portafolio" />
        <figcaption>
          <span>Jcruz</span>
          <strong>Guatemala</strong>
        </figcaption>
      </figure>
    </section>
  )
}

export default Hero
