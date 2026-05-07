import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Services from '../components/Services'
import OurProducts from '../components/OurProducts'
import OurWork from '../components/OurWork'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Services />
      <OurProducts />
      <OurWork />
      <HowItWorks />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
