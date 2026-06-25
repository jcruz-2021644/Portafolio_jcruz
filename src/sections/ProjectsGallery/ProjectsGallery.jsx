import { Code2 } from 'lucide-react'
import kinalClothes from '../../assets/img/projects/Kinal_Clothes.jpeg'
import restaurante from '../../assets/img/projects/restaurante.png'
import sistemaBancario from '../../assets/img/projects/sistema_bancario.png'
import synapse from '../../assets/img/projects/synapse.jpeg'
import veterinaria from '../../assets/img/projects/veterinaria.png'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import './ProjectsGallery.css'

const projectSnapshots = [
  {
    title: 'Synapse',
    year: '2026',
    description:
      'Proyecto similar a Visual Studio Code pero en línea creado por: Jjimenez, Jcruz, Rrodriguez, Rcana y Aroquel, los cuales vieron las deficiencias en el área de informática para su institución.',
    image: synapse,
    containerClassName: 'md:col-span-2',
    repository: 'https://github.com/jjimenez-2021647/SynapseCode',
  },
  {
    title: 'Sistema Bancario',
    year: '2026',
    description:
      'Aplicación orientada a gestionar un banco con interfaz web y mobile para el usuario y el administrador del banco, con funcionalidades de transacciones, cuentas, reportes, etc.',
    image: sistemaBancario,
    containerClassName: 'md:col-span-1',
    repository: 'https://github.com/rcana-2021639/grupo6-sistema-bancario-Frontend',
  },
  {
    title: 'Restaurante',
    year: '2026',
    description:
      'Aplicación orientada al manejo de varios restaurantes con una interfaz en la web y mobile para el usuario y el administrador del restaurante, con funcionalidades de menú, pedidos, reportes, etc.',
    image: restaurante,
    containerClassName: 'md:col-span-1',
    repository: 'https://github.com/rrodriguez-2023342/Proyecto_Restaurantes',
  },
  {
    title: 'Kinal Clothes',
    year: '2025',
    description:
      'Propuesta para una tienda de ropa en línea, con interfaz web para el usuario y el administrador de la tienda, con funcionalidades de catálogo, carrito de compras, reportes, etc.',
    image: kinalClothes,
    containerClassName: 'md:col-span-1',
    repository: 'https://github.com/jjimenez-2021647/KinalitosClothes',
  },
  {
    title: 'Veterinaria',
    year: '2025',
    description:
      'Aplicación orientada a la gestión de una veterinaria con interfaz gráfica para el usuario y el administrador de la veterinaria, con funcionalidades de citas, historial médico, reportes, etc.',
    image: veterinaria,
    containerClassName: 'md:col-span-1 ',
    repository: 'https://github.com/jcruz-2021644/Veterinaria_IN5BM',
  },
]

function SnapshotHeader({ item }) {
  return (
    <figure className="snapshot-card__media">
      <img src={item.image} alt={`Captura del proyecto ${item.title}`} />
      <figcaption>{item.year}</figcaption>
    </figure>
  )
}

function ProjectsGallery() {
  return (
    <section className="gallery-section section" id="capturas" aria-labelledby="gallery-title">
      <div className="section-heading" data-animate>
        <p className="eyebrow">Proyectos técnicos</p>
        <h2 id="gallery-title">Proyectos Robustos y Escalables</h2>
        <p>
        Una selección para la visualización rápida de proyectos robustos y escalables, demostrando habilidades en desarrollo web y diseño de interfaces. Cada proyecto refleja un enfoque en la experiencia del usuario y la aplicación de buenas prácticas de desarrollo.
        </p>
      </div>

      <BentoGrid>
        {projectSnapshots.map((item) => (
          <BentoGridItem
            key={item.title}
            title={item.title}
            description={item.description}
            containerClassName={item.containerClassName}
            className="snapshot-card"
            header={<SnapshotHeader item={item} />}
            action={
              <a
                className="snapshot-card__code-link"
                href={item.repository}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver código de ${item.title}`}
              >
                <Code2 aria-hidden="true" size={18} />
                <span>&lt;/&gt;</span>
              </a>
            }
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default ProjectsGallery
