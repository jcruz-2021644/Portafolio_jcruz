import { Award, Download } from 'lucide-react'
import { achievements } from '../../data/achievements.js'
import './Achievements.css'

function AchievementCard({ achievement }) {
  return (
    <article className="achievement-card" data-animate>
      <figure className="achievement-card__media">
        {achievement.image ? (
          <img src={achievement.image} alt={`Vista de ${achievement.title}`} />
        ) : (
          <div className="achievement-card__placeholder" aria-hidden="true">
            <Award />
          </div>
        )}
      </figure>

      <div className="achievement-card__body">
        <p className="achievement-card__issuer">{achievement.issuer}</p>
        <h3>{achievement.title}</h3>
        <time>{achievement.date}</time>
        <p>{achievement.description}</p>
        <a
          className="achievement-card__download"
          href={achievement.document}
          download={achievement.fileName}
        >
          <Download aria-hidden="true" size={17} />
          Descargar documento
        </a>
      </div>
    </article>
  )
}

function Achievements() {
  return (
    <section className="achievements-section section" id="logros" aria-labelledby="achievements-title">
      <div className="section-heading" data-animate>
        <p className="eyebrow">Logros</p>
        <h2 id="achievements-title">Logros y certificaciones</h2>
        <p>
          Espacio para mostrar certificaciones, reconocimientos y documentos
          descargables que respalden mi formación técnica.
        </p>
      </div>

      <div className="achievements-section__grid">
        {achievements.map((achievement) => (
          <AchievementCard achievement={achievement} key={achievement.title} />
        ))}
      </div>
    </section>
  )
}

export default Achievements
