import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Smartphone, Globe, Palette, Phone, ExternalLink } from 'lucide-react'

const categoryIcons = {
  'Mobile App': Smartphone,
  'Web Platform': Globe,
  'E-Commerce Website': Globe,
  'Voice AI': Phone,
  'UI/UX Design': Palette,
  'Website': Globe,
}

const isMobileProject = (category) => category === 'Mobile App'

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null

  const Icon = categoryIcons[project.category] || Globe
  const mobileView = isMobileProject(project.category)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="min-h-screen w-full max-w-6xl mx-auto px-4 py-8 md:py-16"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Back button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-muted-light hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to projects</span>
          </button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
                <Icon size={20} className="text-purple-glow" />
              </div>
              <span className="text-sm text-purple-glow font-medium tracking-wider uppercase">
                {project.category}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-[var(--font-space)]">
                {project.title}
              </h1>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-purple/40 text-purple-glow hover:bg-purple/10 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={14} />
                  Visit Live Site
                </a>
              )}
            </div>

            <p className="text-lg text-muted max-w-2xl leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full text-muted-light border border-white/[0.1] bg-white/[0.03]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Key features */}
            {project.features && (
              <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-glow mt-1.5 shrink-0" />
                    <span className="text-sm text-muted-light">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sectioned Screenshots (e.g. Customer App / Vendor App) */}
          {project.screenshotSections && project.screenshotSections.length > 0 && (
            <div className="space-y-14">
              {project.screenshotSections.map((section, si) => (
                <div key={si}>
                  <h3 className="text-lg font-semibold text-white font-[var(--font-space)] mb-6 flex items-center gap-3">
                    <div className="w-1 h-6 bg-purple rounded-full" />
                    {section.title}
                    <span className="text-xs text-muted font-normal">({section.screenshots.length} screens)</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
                    {section.screenshots.map((shot, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                        className="flex flex-col items-center gap-3"
                      >
                        <div className="relative w-full aspect-[9/19.5] rounded-[20px] border-[3px] border-white/[0.12] bg-dark-2 overflow-hidden shadow-lg shadow-black/30 hover:border-purple/30 transition-colors duration-300 group">
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
                </div>
              ))}
            </div>
          )}

          {/* Regular Screenshots */}
          {!project.screenshotSections && project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white font-[var(--font-space)] mb-8">
                {mobileView ? 'App Flow' : 'Platform Screenshots'}
              </h3>

              {mobileView ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
                  {project.screenshots.map((shot, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="relative w-full aspect-[9/19.5] rounded-[20px] border-[3px] border-white/[0.12] bg-dark-2 overflow-hidden shadow-lg shadow-black/30 hover:border-purple/30 transition-colors duration-300 group">
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
                <div className="flex flex-col gap-8">
                  {project.screenshots.map((shot, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
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
                              {project.website || `${project.title.toLowerCase().replace(/\s+/g, '')}.com`}
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
                      <span className="text-xs text-muted pl-1">
                        {shot.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* No screenshots placeholder */}
          {!project.screenshotSections && (!project.screenshots || project.screenshots.length === 0) && (
            <div className="text-center py-16 border border-dashed border-white/[0.08] rounded-2xl">
              <p className="text-muted text-sm">Screenshots coming soon</p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple hover:bg-purple-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-purple/30 text-sm"
            >
              Want something similar? Let's talk
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
