import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Globe, Bot, Phone, Search, Palette } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    name: 'Mobile App Development',
    tech: 'Flutter, React Native, Dart, Kotlin',
    timeline: '4-8 Weeks',
    color: '#7c3aed',
  },
  {
    icon: Globe,
    name: 'Website Development',
    tech: 'React, Next.js, Tailwind, Node.js, FastAPI',
    timeline: '2-4 Weeks',
    color: '#3b82f6',
  },
  {
    icon: Bot,
    name: 'WhatsApp Bot',
    tech: 'Python, WhatsApp Business API, Gemini AI',
    timeline: '1-2 Weeks',
    color: '#22c55e',
  },
  {
    icon: Phone,
    name: 'AI Voice Call Bot',
    tech: 'Twilio, Pipecat AI, Google STT/TTS, Gemini',
    timeline: '2-3 Weeks',
    color: '#22d3ee',
  },
  {
    icon: Search,
    name: 'SEO & Marketing',
    tech: 'On-page SEO, Off-page SEO, Google Analytics',
    timeline: 'Ongoing',
    color: '#f59e0b',
  },
  {
    icon: Palette,
    name: 'UI/UX Design',
    tech: 'Figma, Adobe XD, Prototyping, User Research',
    timeline: '1-3 Weeks',
    color: '#ec4899',
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[var(--font-space)]">
                Our Services
              </h2>
              <p className="text-gray-500 mt-2">End-to-end digital solutions for your business</p>
            </div>
            <a
              href="#contact"
              className="mt-4 md:mt-0 flex items-center gap-2 text-purple font-medium text-sm hover:gap-3 transition-all"
            >
              View all services <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
          <span>Service</span>
          <span className="col-span-1">Technology</span>
          <span>Timeline</span>
          <span></span>
        </div>

        {/* Service Rows */}
        <div className="divide-y divide-gray-100">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid md:grid-cols-4 gap-4 items-center px-6 py-5 hover:bg-gray-50 rounded-xl transition-colors group"
            >
              {/* Service Name */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: service.color + '18' }}
                >
                  <service.icon size={20} style={{ color: service.color }} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{service.name}</div>
                </div>
              </div>

              {/* Technology */}
              <div className="text-sm text-gray-600">{service.tech}</div>

              {/* Timeline */}
              <div className="text-sm text-gray-600">{service.timeline}</div>

              {/* CTA */}
              <div className="flex justify-end">
                <a
                  href="#contact"
                  className="px-4 py-2 bg-purple text-white text-xs font-semibold rounded-full hover:bg-purple-dark transition-colors opacity-80 group-hover:opacity-100"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
