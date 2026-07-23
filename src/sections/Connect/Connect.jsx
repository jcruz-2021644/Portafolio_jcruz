import emailjs from '@emailjs/browser'
import { X } from 'lucide-react'
import { useRef, useState } from 'react'
import { personalInfo } from '../../data/personalInfo.js'
import './Connect.css'

const socialLinks = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: personalInfo.links.facebook,
    path:
      'M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: personalInfo.links.instagram,
    path:
      'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
    path:
      'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 3.2V18h16V7.2l-8 5.2-8-5.2zm1.2-1.2L12 10.4 18.8 6H5.2z',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: personalInfo.links.github,
    path:
      'M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.9c-2.78.62-3.37-1.2-3.37-1.2-.45-1.19-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92v2.77c0 .28.18.6.69.5A10.24 10.24 0 0 0 22 12.26C22 6.58 17.52 2 12 2z',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: personalInfo.links.linkedin,
    viewBox: '0 0 640 640',
    path:
      'M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: personalInfo.links.whatsapp,
    path:
      'M20.5 3.5A10 10 0 0 0 3.2 14.2L2 22l7.95-1.14A10 10 0 0 0 20.5 3.5zM12 20a8 8 0 0 1-4.07-1.1l-.29-.17-3.36.48.5-3.27-.19-.31A8 8 0 1 1 12 20zm4.38-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.2-.47-.4-.4-.54-.41h-.46a.9.9 0 0 0-.65.3c-.22.24-.84.82-.84 2s.86 2.33.98 2.49c.12.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28z',
  },
]

function SocialIcon({ path, viewBox = '0 0 24 24' }) {
  return (
    <svg viewBox={viewBox} aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

function Connect() {
  const formRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [sentAt, setSentAt] = useState('')

  const openModal = () => {
    setStatus('idle')
    setStatusMessage('')
    setSentAt(new Date().toLocaleString('es-GT', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }))
    setIsModalOpen(true)
  }

  const closeModal = () => {
    if (status !== 'sending') {
      setIsModalOpen(false)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setStatusMessage('Faltan las credenciales de EmailJS en el archivo .env.')
      return
    }

    try {
      setStatus('sending')
      setStatusMessage('Enviando mensaje...')
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      formRef.current.reset()
      setStatus('success')
      setStatusMessage('Mensaje enviado correctamente. Gracias por escribir.')
    } catch {
      setStatus('error')
      setStatusMessage('No se pudo enviar el mensaje. Revisa tus credenciales de EmailJS.')
    }
  }

  return (
    <>
      <section className="connect-section section" id="contacto" aria-labelledby="contact-title">
        <div className="connect-section__content" data-animate>
          <p className="eyebrow">Contacto</p>
          <h2 id="contact-title">Construyamos algo juntos</h2>
          <p>
            Estoy listo para seguir aprendiendo, participar en prácticas y aportar
            en proyectos donde el orden, la comunicación y el diseño importen.
          </p>
        </div>

        <address className="connect-section__links" data-animate>
          <div className="social-grid" aria-label="Redes sociales y contacto">
            {socialLinks.map((link) => (
              link.id === 'email' ? (
                <button
                  className={`social-card social-card--${link.id}`}
                  type="button"
                  key={link.id}
                  aria-label={link.label}
                  onClick={openModal}
                >
                  <SocialIcon path={link.path} viewBox={link.viewBox} />
                  <span>{link.label}</span>
                </button>
              ) : (
                <a
                  className={`social-card social-card--${link.id}`}
                  href={link.href}
                  key={link.id}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon path={link.path} viewBox={link.viewBox} />
                  <span>{link.label}</span>
                </a>
              )
            ))}
          </div>
        </address>
      </section>

      {isModalOpen && (
        <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <button className="contact-modal__backdrop" type="button" aria-label="Cerrar modal" onClick={closeModal} />
          <div className="contact-modal__panel">
            <button className="contact-modal__close" type="button" aria-label="Cerrar modal" onClick={closeModal}>
              <X aria-hidden="true" size={20} />
            </button>
            <p className="eyebrow">Email directo</p>
            <h3 id="contact-modal-title">Enviame un mensaje</h3>
            <p className="contact-modal__intro">
              Completa el formulario y recibire tu mensaje en mi correo.
            </p>

            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="to_email" value={import.meta.env.VITE_CONTACT_TO_EMAIL || personalInfo.email} />
              <input type="hidden" name="time" value={sentAt} />
              <label>
                Nombre
                <input name="name" type="text" placeholder="Tu nombre" required />
              </label>
              <label>
                Correo electronico
                <input name="email" type="email" placeholder="tu@email.com" required />
              </label>
              <label>
                Asunto
                <input name="subject" type="text" placeholder="Oportunidad, consulta o proyecto" required />
              </label>
              <label>
                Mensaje
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Escribe tu mensaje..."
                  required
                />
              </label>

              {statusMessage && (
                <p className={`contact-form__status contact-form__status--${status}`}>
                  {statusMessage}
                </p>
              )}

              <button className="button button--primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Connect
