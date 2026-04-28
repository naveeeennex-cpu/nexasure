import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'

// Starfield canvas background
function Starfield() {
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

    // Meteors
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

      // Stars
      stars.forEach(s => {
        const twinkle = 0.5 + 0.5 * Math.sin(time * s.speed * 60 + s.phase)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 200, 255, ${s.opacity * twinkle})`
        ctx.fill()
      })

      // Spawn meteors randomly
      if (Math.random() < 0.045) spawnMeteor()

      // Draw meteors
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

        // Meteor trail gradient
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

        // Bright head glow
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

// Metallic Semi-Sphere Globe
function Globe() {
  return (
    <div className="relative w-[500px] h-[280px] md:w-[650px] md:h-[340px] lg:w-[750px] lg:h-[400px] overflow-hidden">
      {/* The full sphere, positioned so only top half shows */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[500px] h-[500px] md:w-[650px] md:h-[650px] lg:w-[750px] lg:h-[750px]">

        {/* Outer atmospheric glow */}
        <div className="absolute inset-[-30px] rounded-full bg-gradient-to-t from-transparent via-cyan-accent/[0.04] to-purple/[0.06] blur-[30px]" />

        {/* Globe body */}
        <div className="absolute inset-0 rounded-full globe-metallic overflow-hidden">
          {/* Base metallic gradient - dark with blue/teal tones */}
          <div className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 120% 120% at 40% 30%, #1e3a5f 0%, #0c1929 40%, #060d18 70%, #020408 100%)
              `
            }}
          />

          {/* Metallic sheen / specular highlight */}
          <div className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 50% 40% at 35% 25%, rgba(120, 180, 220, 0.25) 0%, transparent 60%),
                radial-gradient(ellipse 30% 25% at 30% 20%, rgba(200, 230, 255, 0.15) 0%, transparent 50%)
              `
            }}
          />

          {/* Ocean / surface color areas */}
          <div className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 45% 35% at 35% 40%, rgba(20, 80, 120, 0.5) 0%, transparent 100%),
                radial-gradient(ellipse 30% 50% at 60% 50%, rgba(15, 60, 100, 0.4) 0%, transparent 100%),
                radial-gradient(ellipse 35% 25% at 70% 30%, rgba(25, 90, 130, 0.3) 0%, transparent 100%)
              `
            }}
          />

          {/* Continent-like lighter patches */}
          <div className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 20% 18% at 28% 35%, rgba(60, 140, 180, 0.3) 0%, transparent 100%),
                radial-gradient(ellipse 15% 25% at 55% 42%, rgba(50, 120, 160, 0.25) 0%, transparent 100%),
                radial-gradient(ellipse 18% 12% at 42% 60%, rgba(40, 130, 170, 0.2) 0%, transparent 100%),
                radial-gradient(ellipse 25% 15% at 68% 28%, rgba(55, 135, 175, 0.2) 0%, transparent 100%),
                radial-gradient(ellipse 12% 20% at 38% 25%, rgba(70, 150, 190, 0.15) 0%, transparent 100%)
              `
            }}
          />

          {/* Grid lines - latitude/longitude */}
          <div className="absolute inset-0 rounded-full globe-grid opacity-[0.06]" />

          {/* Strong top-left specular - metallic reflection */}
          <div className="absolute top-[5%] left-[15%] w-[50%] h-[35%] rounded-full bg-gradient-to-br from-white/[0.1] via-white/[0.03] to-transparent blur-[2px]" />

          {/* Edge rim light - right side */}
          <div className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 15% 60% at 90% 40%, rgba(100, 180, 220, 0.12) 0%, transparent 100%)
              `
            }}
          />

          {/* Bottom shadow / curvature darkening */}
          <div className="absolute bottom-0 left-0 right-0 h-[60%] rounded-full bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Atmosphere edge glow */}
          <div className="absolute inset-[-1px] rounded-full border border-white/[0.06]" />
          <div className="absolute inset-[-3px] rounded-full border border-cyan-accent/[0.04]" />
        </div>

        {/* Orbital ring */}
        <div className="absolute inset-[-25px] rounded-full border border-white/[0.04] globe-orbit" />
        <div className="absolute inset-[-25px] globe-orbit">
          <div className="absolute top-1/2 right-[-5px] w-2.5 h-2.5 rounded-full bg-purple-glow shadow-lg shadow-purple/60 globe-dot" />
        </div>
      </div>

      {/* Reflection / glow on the "table" surface below */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-gradient-to-t from-cyan-accent/[0.03] to-transparent blur-[20px]" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#060614] pt-32 md:pt-40">
      {/* Starfield */}
      <Starfield />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.06)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(13,27,42,0.8)_0%,transparent_70%)]" />

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-6 mb-8 md:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] text-white font-[var(--font-space)] tracking-tight"
        >
          Elevate Your
          <br />
          <span className="text-white">Digital Presence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 text-muted text-base md:text-lg max-w-md mx-auto leading-relaxed"
        >
          From idea to actual product — we turn your vision into shipped, real-world digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#060614] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 text-sm"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Semi-sphere Globe - anchored to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-10 mt-auto flex items-end justify-center w-full"
      >
        <Globe />

        {/* Floating stat card - Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute left-[5%] md:left-[12%] top-[15%]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-strong rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <div>
              <div className="text-[10px] text-muted uppercase tracking-wider">Services</div>
              <div className="text-white font-semibold text-sm mt-0.5">Full-Stack</div>
              <div className="text-white font-semibold text-sm">Development</div>
            </div>
            <div className="w-7 h-7 rounded-full bg-purple/20 flex items-center justify-center">
              <X size={12} className="text-purple-glow rotate-45" />
            </div>
          </motion.div>
        </motion.div>

        {/* Floating stat card - Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-[5%] md:right-[12%] top-[40%]"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="glass-strong rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <div>
              <div className="text-[10px] text-muted uppercase tracking-wider">Client Satisfaction</div>
              <div className="text-white font-bold text-2xl">98%</div>
            </div>
            <div className="w-7 h-7 rounded-full bg-cyan-accent/20 flex items-center justify-center">
              <X size={12} className="text-cyan-accent rotate-45" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent z-20" />
    </section>
  )
}
