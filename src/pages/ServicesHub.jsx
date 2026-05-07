import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Briefcase, FileCheck, ShieldCheck, Clock, LifeBuoy, ArrowRight, Smartphone, Globe, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { clientWork } from '../data/clientWork'

const categoryIcon = {
  'Mobile App': Smartphone,
  'Website': Globe,
  'E-Commerce Website': Globe,
  'Voice AI': Phone,
}

const servicePillars = [
  {
    icon: FileCheck,
    title: 'Clear scope',
    desc: 'No surprises, no scope creep. We define deliverables, milestones, and timelines upfront — in writing.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-grade',
    desc: 'Same stack, same standards, same quality bar as the products we build for ourselves. Nothing thrown over the wall.',
  },
  {
    icon: Clock,
    title: 'Honest timelines',
    desc: 'We commit to dates we can actually hit. If something is at risk, we tell you early — not at the deadline.',
  },
  {
    icon: LifeBuoy,
    title: 'Post-launch support',
    desc: 'Hand-off documentation, training, and ongoing support options. Your project keeps running after we ship.',
  },
]

export default function ServicesHub() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px] opacity-25 pointer-events-none bg-cyan-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-accent/30 bg-cyan-accent/[0.08] mb-6"
          >
            <Briefcase size={13} className="text-cyan-accent" />
            <span className="text-xs text-cyan-accent font-medium tracking-[0.18em] uppercase">Our Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-[var(--font-space)] tracking-tight leading-[1.05] mb-6"
          >
            We're a service<br /> company too.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-light max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Beyond our own products, we deliver custom web, mobile, and AI projects
            for clients — engineered to the same bar as the platforms we run ourselves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4">
              <div className="text-2xl md:text-3xl font-bold text-white font-[var(--font-space)]">{clientWork.length}+</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">Projects Shipped</div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4">
              <div className="text-2xl md:text-3xl font-bold text-white font-[var(--font-space)]">Web · App · AI</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">Capabilities</div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4">
              <div className="text-2xl md:text-3xl font-bold text-white font-[var(--font-space)]">100%</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">On-time Delivery</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional service pillars */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-accent text-xs font-medium mb-3 tracking-[0.2em] uppercase">How we work</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] mb-4">
              Professional service, end to end
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              When you hire us, you get a partner who treats your project like our own.
              No black-box agency tricks — just transparent, professional engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicePillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="text-[11px] font-bold text-cyan-accent tracking-widest mb-4">
                    0{i + 1}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-cyan-accent/10 border border-cyan-accent/25 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-cyan-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-[var(--font-space)] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client work grid */}
      <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-cyan-accent text-xs font-medium mb-3 tracking-[0.2em] uppercase">Selected work</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] mb-4">
              Projects we've shipped
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Real client work — websites, apps, and AI systems built and delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientWork.map((work, i) => {
              const Icon = categoryIcon[work.category] || Globe
              return (
                <motion.div
                  key={work.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={`/services/${work.slug}`}
                    className="block h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 p-6 group relative overflow-hidden"
                  >
                    <div
                      className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                      style={{ backgroundColor: work.accent + '30' }}
                    />

                    <div className="relative flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center overflow-hidden ${
                          work.logo ? 'bg-white border-white/20 p-1.5' : 'bg-white/[0.04] border-white/[0.1]'
                        }`}
                      >
                        {work.logo ? (
                          <img src={work.logo} alt={`${work.title} logo`} className="w-full h-full object-contain" />
                        ) : (
                          <Icon size={18} style={{ color: work.accent }} />
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-muted-light">
                        {work.status}
                      </span>
                    </div>

                    <p className="text-[11px] uppercase tracking-wider text-muted font-medium mb-2">
                      {work.category}
                    </p>
                    <h3 className="text-xl font-bold text-white font-[var(--font-space)] mb-2">
                      {work.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-5">
                      {work.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {work.highlights.slice(0, 3).map((h) => (
                        <span key={h} className="text-[11px] px-2.5 py-1 rounded-full text-muted-light border border-white/[0.1] bg-white/[0.03]">
                          {h}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm text-white/80 group-hover:text-white transition-colors font-medium">
                      View case study
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-space)] mb-5">
            Have a project in mind?
          </h2>
          <p className="text-muted-light mb-8 max-w-xl mx-auto">
            Tell us what you're building. We'll come back with scope, timeline, and a plan you can act on.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-purple hover:bg-purple-light text-white font-semibold rounded-full transition-colors text-sm"
            >
              Start a project
              <ArrowRight size={15} />
            </a>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white font-medium rounded-full transition-colors text-sm"
            >
              See our products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
