import { BriefcaseBusiness, Code2, Gauge, Layers3, MonitorSmartphone, ShieldCheck } from 'lucide-react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import './ProjectsGallery.css'

const items = [
  {
    title: 'Sistema Bancario',
    description:
      'Vista administrativa para cuentas, usuarios y operaciones con lectura rapida de estados.',
    icon: <ShieldCheck />,
    containerClassName: 'md:col-span-2',
    variant: 'bank',
  },
  {
    title: 'Perfil profesional',
    description:
      'Seccion personal con datos clave, contacto y enfoque profesional para reclutadores.',
    icon: <BriefcaseBusiness />,
    containerClassName: 'md:col-span-1',
    variant: 'profile',
  },
  {
    title: 'Habilidades visuales',
    description:
      'Grafica de progreso para mostrar fortalezas tecnicas sin saturar de texto.',
    icon: <Gauge />,
    containerClassName: 'md:col-span-1',
    variant: 'skills',
  },
  {
    title: 'Codigo organizado',
    description:
      'Componentes separados, datos centralizados y estilos faciles de mantener.',
    icon: <Code2 />,
    containerClassName: 'md:col-span-1',
    variant: 'code',
  },
  {
    title: 'Responsive real',
    description:
      'Layouts preparados para escritorio, tablet y telefono sin perder jerarquia.',
    icon: <MonitorSmartphone />,
    containerClassName: 'md:col-span-1 md:row-span-2',
    variant: 'responsive',
  },
  {
    title: 'Sistema visual',
    description:
      'Paleta celeste, acua, blanco y coral con sombras, lineas y microinteracciones.',
    icon: <Layers3 />,
    containerClassName: 'md:col-span-2',
    variant: 'system',
  },
]

function ProjectMockup({ variant }) {
  return (
    <div className={`project-mockup project-mockup--${variant}`}>
      <div className="project-mockup__topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="project-mockup__screen">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function ProjectsGallery() {
  return (
    <section className="gallery-section section" aria-labelledby="gallery-title">
      <div className="section-heading" data-animate>
        <p className="eyebrow">Vista rapida</p>
        <h2 id="gallery-title">Capturas conceptuales</h2>
        <p>
          Espacios visuales listos para reemplazarse por capturas reales de los
          proyectos cuando tengas tus imagenes finales.
        </p>
      </div>

      <BentoGrid>
        {items.map((item) => (
          <BentoGridItem
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            containerClassName={item.containerClassName}
            header={<ProjectMockup variant={item.variant} />}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default ProjectsGallery
