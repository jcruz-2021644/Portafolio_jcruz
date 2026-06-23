import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Hero from '../sections/Hero/Hero.jsx'
import About from '../sections/About/About.jsx'
import Projects from '../sections/Projects/Projects.jsx'
import ProjectsGallery from '../sections/ProjectsGallery/ProjectsGallery.jsx'
import Connect from '../sections/Connect/Connect.jsx'
import { Particles } from '../components/ui/particles.jsx'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import './App.css'

function App() {
  const [isDimmed, setIsDimmed] = useState(true)

  useScrollAnimation()

  return (
    <div className={`site-shell ${isDimmed ? 'site-shell--dimmed' : ''}`}>
      <Particles
        color={isDimmed ? '#59d8ff' : '#00a9e8'}
        secondaryColor={isDimmed ? '#00d4c7' : '#ff725e'}
        particleCount={isDimmed ? 150 : 115}
        particleSize={isDimmed ? 1.9 : 1.55}
      />
      <Navbar isDimmed={isDimmed} onThemeToggle={() => setIsDimmed((current) => !current)} />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <ProjectsGallery />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

export default App
