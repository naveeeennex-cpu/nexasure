import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, CheckCircle2, Smartphone, Globe, Users } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { getProductBySlug } from '../data/products'

const isMobileCategory = (category) => category === 'Mobile App'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) return <Navigate to="/" replace />

  const mobile = isMobileCategory(product.category)
  const CategoryIcon = mobile ? Smartphone : Globe

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Accent backdrop */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] opacity-30 pointer-events-none"
          style={{ backgroundColor: product.accent }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-light hover:text-white transition-colors mb-10 group text-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all products
          </Link>

          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-white border border-white/20 p-3 flex items-center justify-center shadow-xl"
              style={{ boxShadow: `0 20px 60px ${product.accent}20` }}
            >
              <img
                src={product.logo}
                alt={`${product.title} logo`}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="flex flex-wrap items-center gap-3 mb-4"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs text-muted-light">
                  <CategoryIcon size={12} />
                  {product.category}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {product.status}
                </span>
                <span className="text-xs text-muted">A LazyRabbit product</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white font-[var(--font-space)] tracking-tight mb-4"
              >
                {product.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-xl md:text-2xl text-muted-light max-w-2xl leading-relaxed mb-6"
              >
                {product.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base text-muted max-w-2xl leading-relaxed mb-8"
              >
                {product.summary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap gap-3"
              >
                {product.website && (
                  <a
                    href={product.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#060614] hover:bg-white/90 transition-colors text-sm font-semibold"
                  >
                    Visit live site
                    <ExternalLink size={14} />
                  </a>
                )}
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white transition-colors text-sm font-medium"
                >
                  Talk to us
                </a>
              </motion.div>
            </div>
          </div>

          {/* Stats strip */}
          {product.stats && product.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-14 grid grid-cols-3 gap-4 max-w-3xl"
            >
              {product.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white font-[var(--font-space)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <p className="text-purple-glow text-xs font-medium mb-3 tracking-[0.2em] uppercase">Overview</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-space)]">
                What it does
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-base md:text-lg text-muted-light leading-relaxed">
                {product.longDescription}
              </p>

              {product.audience && (
                <div className="mt-8">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                    <Users size={15} className="text-purple-glow" />
                    Built for
                  </h3>
                  <ul className="space-y-2.5">
                    {product.audience.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-muted-light">
                        <CheckCircle2 size={15} className="text-purple-glow shrink-0 mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-purple-glow text-xs font-medium mb-3 tracking-[0.2em] uppercase">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-space)]">
              Key features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: product.accent + '20', border: `1px solid ${product.accent}40` }}
                >
                  <CheckCircle2 size={18} style={{ color: product.accent }} />
                </div>
                <h3 className="text-lg font-semibold text-white font-[var(--font-space)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-purple-glow text-xs font-medium mb-3 tracking-[0.2em] uppercase">Engineering</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-space)]">
              Tech stack
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {product.tech.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full text-white border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {product.screenshots && product.screenshots.length > 0 && (
        <section className="py-20 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-purple-glow text-xs font-medium mb-3 tracking-[0.2em] uppercase">A look inside</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-space)]">
                {mobile ? 'App preview' : 'Platform preview'}
              </h2>
            </div>

            {mobile ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {product.screenshots.map((shot, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="relative w-full aspect-[9/19.5] rounded-[20px] border-[3px] border-white/[0.12] bg-dark-2 overflow-hidden shadow-xl shadow-black/30 hover:border-purple/30 transition-colors duration-300 group">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[14px] bg-dark-2 rounded-b-xl z-10" />
                      <img
                        src={shot.src}
                        alt={shot.label}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[11px] text-muted text-center leading-tight">
                      {shot.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-10 max-w-5xl mx-auto">
                {product.screenshots.map((shot, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="rounded-xl border border-white/[0.1] overflow-hidden shadow-xl shadow-black/30 hover:border-purple/20 transition-colors duration-300 group">
                      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.06]">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                        </div>
                        <div className="flex-1 mx-3">
                          <div className="bg-white/[0.06] rounded-md px-3 py-1 text-[10px] text-muted max-w-[300px]">
                            {product.website || `${product.title.toLowerCase().replace(/\s+/g, '')}.com`}
                          </div>
                        </div>
                      </div>
                      <img
                        src={shot.src}
                        alt={shot.label}
                        className="w-full object-cover object-top group-hover:scale-[1.005] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs text-muted pl-1">{shot.label}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${product.accent}20 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-space)] mb-5">
            Want a product like {product.title}?
          </h2>
          <p className="text-muted-light mb-8 max-w-xl mx-auto">
            We build, launch, and operate digital products end-to-end. Tell us what you're working on — we'll figure out the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-purple hover:bg-purple-light text-white font-semibold rounded-full transition-colors text-sm"
            >
              Start a project
            </a>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white font-medium rounded-full transition-colors text-sm"
            >
              See other products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
