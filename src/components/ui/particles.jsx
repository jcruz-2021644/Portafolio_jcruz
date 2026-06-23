import { useEffect, useRef } from 'react'
import './particles.css'

function hexToRgb(hex) {
  const normalized = hex.replace('#', '')
  const value = Number.parseInt(normalized.length === 3
    ? normalized.split('').map((char) => char + char).join('')
    : normalized, 16)

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  }
}

export function Particles({
  color = '#00a9e8',
  secondaryColor = '#00d4c7',
  particleCount = 120,
  particleSize = 1.8,
  animate = true,
  className = '',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const primary = hexToRgb(color)
    const secondary = hexToRgb(secondaryColor)
    const particles = []
    let width = 0
    let height = 0
    let frameId = 0
    let scrollY = window.scrollY
    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      particles.length = 0
      for (let index = 0; index < particleCount; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseY: Math.random() * height,
          size: particleSize * (0.7 + Math.random() * 1.8),
          speed: 0.12 + Math.random() * 0.28,
          drift: -0.18 + Math.random() * 0.36,
          depth: 0.3 + Math.random() * 0.9,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height)

      const scrollOffset = scrollY * 0.04
      const pulse = animate && !reduceMotion ? Math.sin(time * 0.0012) * 0.18 + 0.82 : 0.8

      particles.forEach((particle, index) => {
        if (animate && !reduceMotion) {
          particle.x += particle.drift
          particle.baseY += particle.speed
        }

        if (particle.x < -20) particle.x = width + 20
        if (particle.x > width + 20) particle.x = -20
        if (particle.baseY > height + 20) particle.baseY = -20

        const wave = Math.sin(time * 0.001 + particle.phase) * 10 * particle.depth
        particle.y = particle.baseY + wave + scrollOffset * particle.depth

        if (particle.y > height + 20) particle.y = -20

        const pointerDistance = Math.hypot(particle.x - pointerX, particle.y - pointerY)
        const pointerGlow = Math.max(0, 1 - pointerDistance / 240)
        const mix = (index % 3) / 2
        const red = primary.r * (1 - mix) + secondary.r * mix
        const green = primary.g * (1 - mix) + secondary.g * mix
        const blue = primary.b * (1 - mix) + secondary.b * mix
        const alpha = (0.24 + pointerGlow * 0.42) * pulse

        context.beginPath()
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`
        context.arc(particle.x, particle.y, particle.size + pointerGlow * 1.4, 0, Math.PI * 2)
        context.fill()
      })

      for (let index = 0; index < particles.length; index += 1) {
        for (let next = index + 1; next < particles.length; next += 1) {
          const current = particles[index]
          const target = particles[next]
          const distance = Math.hypot(current.x - target.x, current.y - target.y)

          if (distance < 118) {
            const alpha = (1 - distance / 118) * 0.1
            context.beginPath()
            context.strokeStyle = `rgba(${primary.r}, ${primary.g}, ${primary.b}, ${alpha})`
            context.lineWidth = 1
            context.moveTo(current.x, current.y)
            context.lineTo(target.x, target.y)
            context.stroke()
          }
        }
      }

      frameId = window.requestAnimationFrame(draw)
    }

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    const handlePointerMove = (event) => {
      pointerX = event.clientX
      pointerY = event.clientY
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [animate, color, particleCount, particleSize, secondaryColor])

  return (
    <div className={`particles-field ${className}`.trim()} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
