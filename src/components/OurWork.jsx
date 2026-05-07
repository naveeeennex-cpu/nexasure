import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Briefcase, Smartphone, Globe, Phone } from 'lucide-react'
import { clientWork } from '../data/clientWork'

const categoryIcon = {
  'Mobile App': Smartphone,
  'Website': Globe,
  'E-Commerce Website': Globe,
  'Voice AI': Phone,
}

export default function OurWork() {
  return (
    <section id="work" className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-accent/30 bg-cyan-accent/[0.06] mb-5">
            <Briefcase size={13} className="text-cyan-accent" />
            <span className="text-xs text-cyan-accent font-medium tracking-[0.18em] uppercase">Client Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] mb-4">
            Work we've delivered for clients
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            We're also a service company. These are projects we designed, built,
            and shipped for partners across web, mobile, and AI.
          </p>
        </motion.div>

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
                  to={`/work/${work.slug}`}
                  className="block h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 p-6 group relative overflow-hidden"
                >
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                    style={{ backgroundColor: work.accent + '30' }}
                  />

                  <div className="relative flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center overflow-hidden ${
                        work.logo
                          ? 'bg-white border-white/20 p-1.5'
                          : 'bg-white/[0.04] border-white/[0.1]'
                      }`}
                    >
                      {work.logo ? (
                        <img
                          src={work.logo}
                          alt={`${work.title} logo`}
                          className="w-full h-full object-contain"
                        />
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
                      <span
                        key={h}
                        className="text-[11px] px-2.5 py-1 rounded-full text-muted-light border border-white/[0.1] bg-white/[0.03]"
                      >
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
  )
}
