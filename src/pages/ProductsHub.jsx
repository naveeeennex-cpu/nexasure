import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Search, Lightbulb, Rocket, RefreshCw, ArrowRight, X } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Starfield from '../components/Starfield'
import { products } from '../data/products'

const buildSteps = [
  {
    icon: Search,
    title: 'Spot the problem',
    desc: 'We look for real friction worth solving — markets where users put up with workarounds. Not trends, not hype.',
  },
  {
    icon: Lightbulb,
    title: 'Validate fast',
    desc: 'User research, paper prototypes, conversations with target users — long before we write production code.',
  },
  {
    icon: Rocket,
    title: 'Build & ship',
    desc: 'We design, engineer, and launch under the LazyRabbit banner. Production-grade from day one.',
  },
  {
    icon: RefreshCw,
    title: 'Operate & iterate',
    desc: 'We don\'t build and walk away. We run our products live, listen to users, and ship improvements every week.',
  },
]

export default function ProductsHub() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#060614] pt-32 md:pt-40 pb-24">
        <Starfield />

        {/* Radial gradient overlays — match main hero */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(13,27,42,0.8)_0%,transparent_70%)]" />

        {/* Centered content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/30 bg-purple/[0.08] mb-6 backdrop-blur-sm"
          >
            <Sparkles size={13} className="text-purple-glow" />
            <span className="text-xs text-purple-glow font-medium tracking-[0.18em] uppercase">Our Products</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] text-white font-[var(--font-space)] tracking-tight"
          >
            We Build Our
            <br />
            <span className="text-white">Own Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-muted text-base md:text-lg max-w-md mx-auto leading-relaxed"
          >
            LazyRabbit is a product-first company. We identify real problems,
            validate them with real users, and ship platforms we operate ourselves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#lineup"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#060614] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 text-sm"
            >
              Explore products
              <ArrowRight size={16} />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white font-medium rounded-full transition-colors text-sm backdrop-blur-sm"
            >
              Talk to us
            </a>
          </motion.div>
        </div>

        {/* Floating glass stat cards — match main hero */}
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
              <div className="text-[10px] text-muted uppercase tracking-wider">Live Products</div>
              <div className="text-white font-bold text-2xl mt-0.5">{products.length}</div>
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
              <div className="text-[10px] text-muted uppercase tracking-wider">Surfaces</div>
              <div className="text-white font-semibold text-sm mt-0.5">Web · App</div>
              <div className="text-white font-semibold text-sm">AI · Voice</div>
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
              <div className="text-[10px] text-muted uppercase tracking-wider">Combined Users</div>
              <div className="text-white font-bold text-2xl mt-0.5">10K+</div>
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-400/20 flex items-center justify-center">
              <X size={12} className="text-emerald-300 rotate-45" />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent z-20" />
      </section>

      {/* How we build products */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-purple-glow text-xs font-medium mb-3 tracking-[0.2em] uppercase">Our approach</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] mb-4">
              How we build products
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Every product we ship goes through the same disciplined process — from problem to operating platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {buildSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="text-[11px] font-bold text-purple-glow tracking-widest mb-4">
                    0{i + 1}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-purple/15 border border-purple/25 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-purple-glow" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-[var(--font-space)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section id="lineup" className="py-24 border-t border-white/[0.06] relative overflow-hidden scroll-mt-20">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-purple-glow text-xs font-medium mb-3 tracking-[0.2em] uppercase">The lineup</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] mb-4">
              Products by LazyRabbit
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Each one designed, engineered, and operated by our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="block h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 p-7 group relative overflow-hidden"
                >
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                    style={{ backgroundColor: product.accent + '30' }}
                  />

                  <div className="relative flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-white/20 p-2 flex items-center justify-center overflow-hidden">
                      <img src={product.logo} alt={`${product.title} logo`} className="w-full h-full object-contain" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {product.status}
                    </span>
                  </div>

                  <p className="text-[11px] uppercase tracking-wider text-muted font-medium mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white font-[var(--font-space)] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {product.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="text-[11px] px-2.5 py-1 rounded-full text-muted-light border border-white/[0.1] bg-white/[0.03]">
                        {h}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm text-white/80 group-hover:text-white transition-colors font-medium">
                    Explore product
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-space)] mb-5">
            Have a product idea?
          </h2>
          <p className="text-muted-light mb-8 max-w-xl mx-auto">
            We can build, launch, and operate it with you — same process, same bar as our own products.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-purple hover:bg-purple-light text-white font-semibold rounded-full transition-colors text-sm"
            >
              Let's build something
              <ArrowRight size={15} />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white font-medium rounded-full transition-colors text-sm"
            >
              See our service work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
