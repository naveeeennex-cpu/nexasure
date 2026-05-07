import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const w = () => canvas.offsetWidth
    const h = () => canvas.offsetHeight

    const stars = Array.from({ length: 450 }, () => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      r: Math.random() * 1.4 + 0.3,
      opacity: Math.random() * 0.7 + 0.25,
      speed: Math.random() * 0.0008 + 0.0002,
      phase: Math.random() * Math.PI * 2,
    }))

    const meteors = []
    const spawnMeteor = () => {
      meteors.push({
        x: Math.random() * w() * 0.8 + w() * 0.1,
        y: -10,
        speed: Math.random() * 3 + 4,
        length: Math.random() * 80 + 60,
        opacity: Math.random() * 0.4 + 0.3,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        width: Math.random() * 1.2 + 0.5,
        life: 0,
        maxLife: Math.random() * 60 + 40,
      })
    }

    let time = 0
    const draw = () => {
      ctx.clearRect(0, 0, w(), h())
      time += 1

      stars.forEach((s) => {
        const twinkle = 0.5 + 0.5 * Math.sin(time * s.speed * 60 + s.phase)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 200, 255, ${s.opacity * twinkle})`
        ctx.fill()
      })

      if (Math.random() < 0.045) spawnMeteor()

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        m.x += Math.cos(m.angle) * m.speed
        m.y += Math.sin(m.angle) * m.speed
        m.life += 1

        const fadeIn = Math.min(m.life / 8, 1)
        const fadeOut = Math.max(1 - m.life / m.maxLife, 0)
        const alpha = m.opacity * fadeIn * fadeOut

        if (alpha <= 0 || m.y > h() + 20) {
          meteors.splice(i, 1)
          continue
        }

        const tailX = m.x - Math.cos(m.angle) * m.length
        const tailY = m.y - Math.sin(m.angle) * m.length

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y)
        grad.addColorStop(0, `rgba(180, 160, 255, 0)`)
        grad.addColorStop(0.6, `rgba(200, 180, 255, ${alpha * 0.4})`)
        grad.addColorStop(1, `rgba(255, 255, 255, ${alpha})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(m.x, m.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = m.width
        ctx.lineCap = 'round'
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(m.x, m.y, m.width + 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220, 210, 255, ${alpha * 0.6})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
