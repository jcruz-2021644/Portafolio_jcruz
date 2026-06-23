import { personalInfo } from '../../data/personalInfo.js'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
      <a href="#inicio">Volver arriba</a>
    </footer>
  )
}

export default Footer
