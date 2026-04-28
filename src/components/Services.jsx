import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Globe, Bot, Phone, Search, Palette } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    name: 'Mobile App Development',
    description:
      'Cross-platform apps built with Flutter & React Native, delivered in 4-8 weeks.',
  },
  {
    icon: Globe,
    name: 'Website Development',
    description:
      'Modern, fast websites on React, Next.js and Tailwind — shipped in 2-4 weeks.',
  },
  {
    icon: Bot,
    name: 'WhatsApp Bot',
    description:
      'Automate customer support with AI-powered WhatsApp Business bots.',
  },
  {
    icon: Phone,
    name: 'AI Voice Call Bot',
    description:
      'Conversational voice agents using Twilio, Pipecat AI and Gemini.',
  },
  {
    icon: Search,
    name: 'SEO & Marketing',
    description:
      'On-page & off-page SEO with analytics to boost your online presence.',
  },
  {
    icon: Palette,
    name: 'UI/UX Design',
    description:
      'User-centered design with Figma — research, prototyping and polish.',
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #f5f5f0 0%, #f9f7f2 35%, #fdf6e8 70%, #eaf6ee 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-space)]">
              Our Services
            </h2>
            <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">
              Unleashing comprehensive digital services tailored to elevate
              your online presence and boost your success.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-semibold rounded-full text-sm transition-colors shrink-0 shadow-sm"
          >
            Get Started
          </a>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const isActive = activeIndex === i
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseEnter={() => setActiveIndex(i)}
                className={`relative rounded-2xl p-7 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-xl -translate-y-1'
                    : 'bg-white text-gray-900 shadow-sm border border-gray-100'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <service.icon size={20} />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isActive ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {service.name}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    isActive ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {service.description}
                </p>

                {/* Learn more */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5 ${
                    isActive ? 'text-emerald-400' : 'text-gray-900'
                  }`}
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
