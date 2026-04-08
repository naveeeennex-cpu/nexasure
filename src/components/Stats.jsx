import { motion } from 'framer-motion'

const stats = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '23+', label: 'Happy Clients' },
  { value: '4+', label: 'Years Experience' },
  { value: '97%', label: 'Client Satisfaction' },
]

export default function Stats() {
  return (
    <section className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="stats-gradient rounded-2xl py-8 px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
              We in numbers:
            </div>
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold text-white font-[var(--font-space)]">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-white/70 max-w-[80px] leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
