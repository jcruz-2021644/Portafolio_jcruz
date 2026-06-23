import certificadoPowerBI from '../assets/img/achievements/certificado-PowerBI-jcruz.png'
import e4cc from '../assets/documents/pdf/Certificado_JEFRY ANDRé CRUZ YUMáN_B1.pdf?url'
import itEssentialsPdf from '../assets/documents/pdf/IT_Essentials_certificate_jcruz-2021644-kinal-edu-gt_77abd752-7913-497d-ac05-1524bf6bc92f.pdf?url'
import teensIntPdf from '../assets/documents/pdf/JEFRY ANDRÉ CRUZ YUMÁN TeensInt.pdf?url'
import reconocimiento1Pdf from '../assets/documents/pdf/reconocimiento1.pdf?url'
import reconocimiento2Pdf from '../assets/documents/pdf/reconocimiento2.pdf?url'
import induccionJava from '../assets/documents/pdf/Introduccion_a_Java.pdf?url'

//imagens para los preview
import b1 from '../assets/img/achievements/b1.png'
import teens from '../assets/img/achievements/teens.png'
import reconocimiento from '../assets/img/achievements/reconocimiento.png'
import reconocimiento2 from '../assets/img/achievements/reconocimiento2.png'
import cetificadoPowerBIImg from '../assets/img/achievements/certificado-PowerBI-jcruz.png'
import ITessentialsImg from '../assets/img/achievements/ITEssential.png'
import JavaImg from '../assets/img/achievements/Java.png'

export const achievements = [

  {
    title: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    description:
      'Conocimientos de hardware, software, soporte tecnico, mantenimiento y solucion de problemas.',
    image: ITessentialsImg,
    document: itEssentialsPdf,
    fileName: 'it-essentials.pdf',
  },
  {
    title: 'Induccion a Java',
    issuer: 'Java',
    date: '2024',
    description:
      'Certificado de induccion a Java, demostrando habilidades de programacion y comprension en el lenguaje de programacion Java.',
    image: JavaImg,
    document: induccionJava,
    fileName: 'Introduccion-a-Java.pdf',
  },
  {
    title: 'Reconocimiento academico 1',
    issuer: 'Formacion tecnica',
    date: '2025',
    description:
      'Reconocimiento por participacion, desempeno o cumplimiento destacado en actividades academicas.',
    image: reconocimiento,
    document: reconocimiento1Pdf,
    fileName: 'reconocimiento-academico-1.pdf',
  },
  {
    title: 'Teens Intermediate',
    issuer: 'Programa academico',
    date: '2026',
    description:
      'Certificado de nivel intermedio en inglés, demostrando habilidades de comunicación y comprensión en situaciones cotidianas.',
    image: teens,
    document: teensIntPdf,
    fileName: 'teens-int.pdf',
  },
  {
    title: 'Certificacion B1',
    issuer: 'E4CC Academy',
    date: '2026',
    description:
      'Certificado de nivel B1 en inglés, demostrando habilidades de comunicación y comprensión en situaciones cotidianas.',
    image: b1,
    document: e4cc,
    fileName: 'certificacion-e4cc.pdf',
  },
  {
    title: 'Certificado Power BI',
    issuer: 'Power BI',
    date: '2026',
    description:
      'Habilidad para crear informes, analizar datos y presentar dashboards interactivos.',
    image: cetificadoPowerBIImg,
    document: certificadoPowerBI,
    fileName: 'certificado-power-bi.png',
  },
  {
    title: 'Reconocimiento academico 2',
    issuer: 'Formacion tecnica',
    date: '2026',
    description:
      'Segundo reconocimiento agregado al portafolio como respaldo de crecimiento y constancia.',
    image: reconocimiento2,
    document: reconocimiento2Pdf,
    fileName: 'reconocimiento-academico-2.pdf',
  },
]
