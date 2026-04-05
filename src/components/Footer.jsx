import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error('Please fill in name and phone number')
      return
    }
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      toast.error('Please enter a valid 10-digit phone number')
      return
    }
    setLoading(true)

    const text = `Hi, I'm ${form.name}.\nPhone: ${form.phone}\n${form.message ? `Message: ${form.message}` : ''}`
    const url = `https://wa.me/919176186062?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')

    toast.success('Redirecting to WhatsApp!')
    setLoading(false)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <footer id="contact" className="bg-dark relative">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left - CTA Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-space)] leading-snug">
                Drop us a line or two, we are open for creative minds and collaborations!
              </h2>
              <a
                href="mailto:naveen16043@gmail.com"
                className="inline-flex items-center gap-2 mt-6 text-purple-glow hover:text-purple-light transition-colors text-sm"
              >
                <Mail size={16} />
                naveen16043@gmail.com
              </a>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Contact</h4>
                  <div className="flex items-center gap-2 text-muted-light text-sm mb-2">
                    <Phone size={14} />
                    +91 9176186062
                  </div>
                  <div className="flex items-center gap-2 text-muted-light text-sm">
                    <Mail size={14} />
                    naveen16043@gmail.com
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Location</h4>
                  <div className="flex items-start gap-2 text-muted-light text-sm">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    Chennai, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Book a Free Consultation</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple transition-colors"
                />
                <textarea
                  placeholder="Tell us about your project (optional)"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-purple hover:bg-purple-light text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple/30 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : (
                    <>
                      <Send size={16} />
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white font-[var(--font-space)]">Robilot</span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Robilot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
