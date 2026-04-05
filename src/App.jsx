import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import HowItWorks from './components/HowItWorks'
import Clients from './components/Clients'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Services />
      <Portfolio />
      <HowItWorks />
      <Clients />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
