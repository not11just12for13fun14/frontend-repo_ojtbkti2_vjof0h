import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Integrations from './components/Integrations'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F6F8F7] font-sans">
      <Hero />
      <Services />
      <Benefits />
      <Pricing />
      <Integrations />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
