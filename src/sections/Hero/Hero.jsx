import { Sparkles } from 'lucide-react'
import jcruz from '../../assets/img/profile/yo_chumpa_kinal.jpeg'
import { personalInfo } from '../../data/personalInfo.js'
import CvDownloadButton from '../../components/Buttons/CvDownloadButton.jsx'
import ExploreButton from '../../components/Buttons/ExploreButton.jsx'
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
          <ExploreButton href="#proyectos">Ver proyectos</ExploreButton>
          <CvDownloadButton href={personalInfo.links.cv} />
          <ExploreButton href="#contacto">Contacto</ExploreButton>
        </div>
        <div className="hero-section__stats" aria-label="Resumen profesional">
          <span><strong>06+</strong> tecnologías</span>
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
