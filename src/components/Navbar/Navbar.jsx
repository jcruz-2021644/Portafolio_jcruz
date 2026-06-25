import { Moon, SunMedium } from 'lucide-react'
import logoImage from '../../assets/img/profile/mi_logo.png'
import { useScrollSpy } from '../../hooks/useScrollSpy.js'
import './Navbar.css'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos A.' },
  { href: '#capturas', label: 'Proyectos R.' },
  { href: '#logros', label: 'Logros' },
  { href: '#contacto', label: 'Contacto' },
]

const sectionIds = links.map((link) => link.href.slice(1))

function Navbar({ isDimmed, onThemeToggle }) {
  const activeId = useScrollSpy(sectionIds)

  return (
    <header className={`site-header ${isDimmed ? 'site-header--dimmed' : ''}`}>
      <div className="site-header__lamp" aria-hidden="true" />
      <nav className="navbar" aria-label="Navegacion principal">
        <a className="navbar__brand" href="#inicio" aria-label="Ir al inicio">
          <img src={logoImage} alt="Logo de Jefry Cruz" />
        </a>
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className={activeId === link.href.slice(1) ? 'is-active' : ''}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="navbar__theme"
          type="button"
          aria-label="Cambiar intensidad visual del nav"
          aria-pressed={isDimmed}
          onClick={onThemeToggle}
        >
          {isDimmed ? <SunMedium aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
