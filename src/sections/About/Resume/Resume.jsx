import { resume } from '../../../data/resume.js'
import ResumeItem from './ResumeItem.jsx'
import './Resume.css'

function Resume() {
  return (
    <article className="resume panel" data-animate>
      <h3>Trayectoria</h3>
      <ol className="resume__list">
        {resume.map((item) => (
          <ResumeItem key={`${item.period}-${item.title}`} item={item} />
        ))}
      </ol>
    </article>
  )
}

export default Resume
