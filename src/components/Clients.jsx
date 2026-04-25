import { motion } from 'framer-motion'

const clients = [
  { name: 'Stranger Meet', logo: '/logos/stranger meet.png' },
  { name: 'MatchInMinutes', logo: '/logos/MIM_logo.png' },
  { name: 'Aptirix', logo: '/logos/aptirix_logo.jpg' },
  { name: 'MLV Enterprises', logo: '/logos/mlv_logo.png' },
  { name: 'Pick Your Slot', logo: '/logos/pys_logo.png' },
  { name: 'Shivay Interior Decor', logo: '/logos/Shiveyinteriordecor_logo.png' },
  { name: 'Adory Creatives', logo: '/logos/adory_creatives.png' },
  { name: 'Green Access Tax', logo: '/logos/greenacesss.png' },
]

export default function Clients() {
  // Duplicate the list for seamless loop
  const marqueeItems = [...clients, ...clients, ...clients, ...clients]

  return (
    <section className="py-20 bg-lavender overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-start mb-14"
        >
          <div>
            <p className="text-purple text-sm font-medium mb-2 tracking-wider uppercase">We worked with</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[var(--font-space)]">
              Our Clients
            </h2>
          </div>
          <p className="text-gray-500 md:mt-8">
            Our clients trust us to deliver exceptional digital solutions. We help them achieve their goals and accelerate their digital transformation.
          </p>
        </motion.div>
      </div>

      {/* Marquee Scroll */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-lavender to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-lavender to-transparent z-10 pointer-events-none" />

        <div className="marquee-container">
          <div className="marquee-track">
            {marqueeItems.map((client, i) => (
              <div
                key={i}
                className="marquee-item bg-white rounded-2xl py-6 px-8 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-lg transition-shadow group cursor-default mx-3"
              >
                <div className="h-14 w-24 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-14 max-w-[100px] object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-semibold text-gray-500 text-center leading-tight whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
