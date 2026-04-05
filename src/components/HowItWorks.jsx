import { motion } from 'framer-motion'
import { Users, FileText, Code, Rocket, Check } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Users,
    title: 'Consult & Discover',
    description: 'We understand your business needs, goals, and vision through a free consultation call.',
    active: false,
  },
  {
    number: '2',
    icon: FileText,
    title: 'Plan & Design',
    description: 'We create wireframes, UI designs, and a detailed project roadmap for your approval.',
    active: false,
  },
  {
    number: '3',
    icon: Code,
    title: 'Develop & Build',
    description: 'Our team builds your product using modern tech with regular progress updates.',
    active: false,
  },
  {
    number: '4',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We deploy your project and provide ongoing support and maintenance.',
    active: true,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-lavender relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple text-sm font-medium mb-2 tracking-wider uppercase">Quick guide</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[var(--font-space)]">
            Get started together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
                step.active
                  ? 'bg-dark text-white shadow-xl shadow-dark/30'
                  : 'bg-white text-gray-900 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Large background number */}
              <span
                className={`text-[80px] leading-none font-bold font-[var(--font-space)] mb-4 block ${
                  step.active ? 'text-white/20' : 'text-gray-300/60'
                }`}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  step.active
                    ? 'bg-purple'
                    : 'bg-gray-100'
                }`}
              >
                {step.active ? (
                  <Check size={22} className="text-white" />
                ) : (
                  <step.icon size={22} className="text-gray-600" />
                )}
              </div>

              {/* Text */}
              <h3 className={`text-base font-semibold mb-2 ${step.active ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed ${step.active ? 'text-white/70' : 'text-gray-500'}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
