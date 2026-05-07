import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { products } from '../data/products'

export default function OurProducts() {
  return (
    <section id="products" className="py-24 bg-dark relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/30 bg-purple/[0.06] mb-5">
            <Sparkles size={13} className="text-purple-glow" />
            <span className="text-xs text-purple-glow font-medium tracking-[0.18em] uppercase">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] mb-4">
            Products we built, run, and ship
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            We're a product company first. These are our own platforms — designed,
            engineered, and operated by the LazyRabbit team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/products/${product.slug}`}
                className="block h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 p-7 group relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ backgroundColor: product.accent + '30' }}
                />

                <div className="relative flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-white/20 p-2 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.logo}
                      alt={`${product.title} logo`}
                      className="w-full h-full object-contain"
                    />
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
                    <span
                      key={h}
                      className="text-[11px] px-2.5 py-1 rounded-full text-muted-light border border-white/[0.1] bg-white/[0.03]"
                    >
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
  )
}
