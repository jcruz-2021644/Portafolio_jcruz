import miLogo from '../assets/img/profile/mi_logo.png'
import yoChumpa from '../assets/img/profile/yo_chumpa_kinal.jpeg'


//proyecto de agenda web
import login_agenda from '../assets/img/projects/login_agenda.png'
import home_agenda from '../assets/img/projects/telefonos_agenda.png'
import add_agenda from '../assets/img/projects/tareas_agenda.png' 

// proyecto de rediseño de kinal
import redisenio_kinal from '../assets/img/projects/redisenio_kinal.png'
import redisenio_kinal2 from '../assets/img/projects/redisenio_kinal1.png'
import redisenio_kinal3 from '../assets/img/projects/redisenio_kinal2.png'

//proyecto de agencia de viajes
import agencia_viajes from '../assets/img/projects/agencia_viajes.png'
import agencia_viajes2 from '../assets/img/projects/agencia_viajes2.png'
import agencia_viajes3 from '../assets/img/projects/agencia_viajes3.png'

export const projects = [
  {
    title: 'Agenda de Contactos',
    category: 'Aplicacion web',
    description:
      'Aplicacion para administrar numeros de telefono y operaciones basicas de una agenda de tareas con tipos de prioridad.',
    learned: 'Mejore validaciones, separacion de responsabilidades y manejo de flujos de datos.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Validaciones'],
    images: [login_agenda, home_agenda, add_agenda],
    link: 'https://agenda-web-jcruz.netlify.app/',
    repository: 'https://github.com/jcruz-2021644/Laboratorio_1_Agenda_Web_2026',
  },
  {
    title: 'Sobre Mi y Rediseño de Kinal',
    category: 'Sitio web',
    description:
      'Sitio responsivo para presentar mi perfil, hobbies y mi propuesta al rediseño de kinal.',
    learned: 'Fortaleci composicion visual, componentes reutilizables y diseno responsive.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    images: [redisenio_kinal, redisenio_kinal2, redisenio_kinal3],
    link: 'https://resiseno-kinal-pw.netlify.app/',
    repository: 'https://github.com/jcruz-2021644/Laboratorio_pagina_web',
  },
  {
    title: 'Agencia de Viajes',
    category: 'Sitio web',
    description:
      'Sitio web visual para una agencia de viajes.',
    learned: 'Aprendi a utilizar diseño responsive y componentes reutilizables.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    images: [agencia_viajes, agencia_viajes2, agencia_viajes3],
    link: 'https://agencias-de-viajes-jcruz.netlify.app/',
    repository: 'https://github.com/jcruz-2021644/ProyectoHTML5toWeb',
  },
]
