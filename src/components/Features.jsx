import { motion } from 'framer-motion'
import { Smartphone, Globe, Bot, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'We build cross-platform mobile apps using Flutter and React Native that deliver seamless user experiences.',
    color: 'from-purple to-blue-accent',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies.',
    color: 'from-cyan-accent to-blue-accent',
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Voice Bots',
    description: 'Intelligent WhatsApp bots and AI-powered voice agents that automate sales and customer support.',
    color: 'from-purple-light to-purple',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    description: 'Data-driven SEO strategies and digital marketing campaigns to boost your online visibility and growth.',
    color: 'from-blue-accent to-cyan-accent',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Features() {
  return (
    <section id="services" className="py-24 bg-dark relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
