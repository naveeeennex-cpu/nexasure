import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Rabbit,
  X,
  Target,
  Zap,
  ShieldCheck,
  HeartHandshake,
  Calendar,
  Rocket,
  Users,
  Award,
  ArrowRight,
  Linkedin,
  Mail,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Starfield from '../components/Starfield'

const values = [
  {
    icon: Target,
    title: 'Build for users',
    desc: 'We start with a real problem and a real user — never a hunch dressed up as a feature.',
  },
  {
    icon: Zap,
    title: 'Ship fast, iterate faster',
    desc: 'Working software beats perfect plans. We ship, learn from real use, and improve weekly.',
  },
  {
    icon: ShieldCheck,
    title: 'Operate what we build',
    desc: 'We don\'t hand off and disappear. Every product we ship, we run — for ourselves or our clients.',
  },
  {
    icon: HeartHandshake,
    title: 'Be honest, always',
    desc: 'Honest scope, honest timelines, honest trade-offs. No agency theatre, no false promises.',
  },
]

const milestones = [
  { year: '2024', title: 'LazyRabbit founded', desc: 'Started with a small team and a clear bet — build products we\'d use ourselves.' },
  { year: '2024', title: 'First product live', desc: 'Launched our first own platform and onboarded early users.' },
  { year: '2025', title: 'Three products operating', desc: 'Aptirix, MatchInMinutes, and Stranger Meet running live with real users.' },
  { year: '2025', title: 'Service practice scaled', desc: 'Started shipping client work — websites, apps, AI systems — to the same bar.' },
]

const team = [
  { name: 'X', role: 'Founder & CEO', bio: 'Sets product strategy and runs the team.', accent: '#7c3aed' },
  { name: 'X', role: 'Co-Founder & CTO', bio: 'Engineering, infrastructure, and the bar for code quality.', accent: '#22d3ee' },
  { name: 'X', role: 'Head of Design', bio: 'Owns product UX, brand, and the visual language across surfaces.', accent: '#ec4899' },
  { name: 'X', role: 'Lead Engineer', bio: 'Full-stack engineering across our platforms and client work.', accent: '#10b981' },
  { name: 'X', role: 'AI Engineer', bio: 'Voice AI, agentic workflows, and ML pipelines.', accent: '#a855f7' },
  { name: 'X', role: 'Product Manager', bio: 'Connects user research, product decisions, and shipping.', accent: '#f59e0b' },
]

const stats = [
  { label: 'Founded', value: '2024' },
  { label: 'Products live', value: '3' },
  { label: 'Client projects', value: '5+' },
  { label: 'Team', value: `${team.length}+` },
]

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#060614] pt-32 md:pt-40 pb-24">
        <Starfield />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(13,27,42,0.8)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/30 bg-purple/[0.08] mb-6 backdrop-blur-sm"
          >
            <Rabbit size={13} className="text-purple-glow" />
            <span className="text-xs text-purple-glow font-medium tracking-[0.18em] uppercase">About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] text-white font-[var(--font-space)] tracking-tight"
          >
            A small team
            <br />
            <span className="text-white">building the future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            LazyRabbit is a product-and-services company headquartered in Chennai.
            We design, engineer, and operate digital platforms — for ourselves and for clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#story"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#060614] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 text-sm"
            >
              Read our story
              <ArrowRight size={16} />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white font-medium rounded-full transition-colors text-sm backdrop-blur-sm"
            >
              Work with us
            </a>
          </motion.div>
        </div>

        {/* Floating glass stat cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute left-[5%] md:left-[10%] top-[25%] hidden sm:block z-10"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-strong rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <div>
              <div className="text-[10px] text-muted uppercase tracking-wider">Founded</div>
              <div className="text-white font-bold text-2xl mt-0.5">2024</div>
            </div>
            <div className="w-7 h-7 rounded-full bg-purple/20 flex items-center justify-center">
              <X size={12} className="text-purple-glow rotate-45" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-[5%] md:right-[10%] top-[35%] hidden sm:block z-10"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="glass-strong rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <div>
              <div className="text-[10px] text-muted uppercase tracking-wider">Based in</div>
              <div className="text-white font-semibold text-sm mt-0.5">Chennai</div>
              <div className="text-white font-semibold text-sm">India</div>
            </div>
            <div className="w-7 h-7 rounded-full bg-cyan-accent/20 flex items-center justify-center">
              <X size={12} className="text-cyan-accent rotate-45" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute left-[15%] md:left-[20%] bottom-[18%] hidden md:block z-10"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="glass-strong rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <div>
              <div className="text-[10px] text-muted uppercase tracking-wider">Team</div>
              <div className="text-white font-bold text-2xl mt-0.5">{team.length}+</div>
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-400/20 flex items-center justify-center">
              <X size={12} className="text-emerald-300 rotate-45" />
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent z-20" />
      </section>

      {/* Our Story */}
      <section id="story" className="py-24 border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <p className="text-purple-glow text-xs font-medium mb-3 tracking-[0.2em] uppercase">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-space)]">
                Why we started
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-base md:text-lg text-muted-light leading-relaxed">
              <p>
                LazyRabbit started with a frustration we couldn't shake — too many digital
                products were either built fast and broken, or built slow and irrelevant by the time
                they shipped. We wanted to do both well.
              </p>
              <p>
                So we set ourselves a simple rule: <span className="text-white font-medium">build products we'd
                actually use ourselves</span>, and only take on client work we'd be proud to put our
                name on. No half-measures, no agency theatre.
              </p>
              <p>
                Today, we operate three of our own products and ship custom projects for clients
                across web, mobile, and AI. Same team, same standards, same bar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-purple-glow text-xs font-medium mb-3 tracking-[0.2em] uppercase">What we believe</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] mb-4">
              Our values
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Four principles that shape how we work, every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="text-[11px] font-bold text-purple-glow tracking-widest mb-4">
                    0{i + 1}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-purple/15 border border-purple/25 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-purple-glow" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-[var(--font-space)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-purple-glow text-xs font-medium mb-3 tracking-[0.2em] uppercase">The Team</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] mb-4">
              The people behind LazyRabbit
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A small, senior team of builders. Every product and project we ship is touched by
              the same people end to end.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300 group relative overflow-hidden"
              >
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ backgroundColor: member.accent + '30' }}
                />

                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-full border-2 flex items-center justify-center mb-5 text-3xl font-bold text-white font-[var(--font-space)]"
                    style={{
                      backgroundColor: member.accent + '20',
                      borderColor: member.accent + '40',
                    }}
                  >
                    {member.name}
                  </div>

                  <h3 className="text-xl font-semibold text-white font-[var(--font-space)]">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium mt-1" style={{ color: member.accent }}>
                    {member.role}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mt-3">{member.bio}</p>

                  <div className="flex items-center gap-2 mt-5">
                    <button
                      type="button"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-center hover:border-white/[0.18] hover:bg-white/[0.05] transition-colors"
                    >
                      <Linkedin size={14} className="text-muted-light" />
                    </button>
                    <button
                      type="button"
                      aria-label="Email"
                      className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-center hover:border-white/[0.18] hover:bg-white/[0.05] transition-colors"
                    >
                      <Mail size={14} className="text-muted-light" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-cyan-accent text-xs font-medium mb-3 tracking-[0.2em] uppercase">The Journey</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] mb-4">
              Milestones
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-5 text-center"
              >
                <div className="text-3xl font-bold text-white font-[var(--font-space)]">{stat.value}</div>
                <div className="text-xs text-muted uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.08] md:-translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((milestone, i) => {
                const Icon = i === 0 ? Rocket : i === milestones.length - 1 ? Award : i % 2 === 0 ? Users : Calendar
                const left = i % 2 === 0
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative md:grid md:grid-cols-2 md:gap-10 ${left ? '' : 'md:[&>*:first-child]:order-2'}`}
                  >
                    <div className={`pl-12 md:pl-0 ${left ? 'md:text-right md:pr-8' : 'md:pl-8 md:col-start-2'}`}>
                      <div className={`inline-flex items-center gap-2 mb-2 ${left ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-xs font-bold text-purple-glow tracking-widest">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white font-[var(--font-space)] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">{milestone.desc}</p>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-dark border-2 border-purple/40 flex items-center justify-center shadow-lg shadow-purple/20">
                      <Icon size={14} className="text-purple-glow" />
                    </div>

                    <div className={`hidden md:block ${left ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-space)] mb-5">
            Want to work with us?
          </h2>
          <p className="text-muted-light mb-8 max-w-xl mx-auto">
            Whether you have a product idea, a project to ship, or want to join the team —
            we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-purple hover:bg-purple-light text-white font-semibold rounded-full transition-colors text-sm"
            >
              Get in touch
              <ArrowRight size={15} />
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white font-medium rounded-full transition-colors text-sm"
            >
              See our products
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
