import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieConsent, { type ConsentState } from '../components/CookieConsent'
import DemoModal from '../components/DemoModal'
import ContactModal from '../components/ContactModal'
import HeroSection from '../sections/HeroSection'
import PainPointsSection from '../sections/PainPointsSection'
import NorwayStatsSection from '../sections/NorwayStatsSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import FeaturesSection from '../sections/FeaturesSection'
import WhoItsForSection from '../sections/WhoItsForSection'
import PricingSection from '../sections/PricingSection'
import FAQSection from '../sections/FAQSection'
import CTASection from '../sections/CTASection'

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [, setCookieConsent] = useState<ConsentState | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar onDemoClick={() => setIsDemoOpen(true)} />
      <main>
        <HeroSection onDemoClick={() => setIsDemoOpen(true)} />
        <PainPointsSection />
        <NorwayStatsSection onDemoClick={() => setIsDemoOpen(true)} />
        <HowItWorksSection />
        <FeaturesSection />
        <WhoItsForSection />
        <PricingSection onDemoClick={() => setIsDemoOpen(true)} />
        <FAQSection />
        <CTASection onDemoClick={() => setIsDemoOpen(true)} />
      </main>
      <Footer onContactClick={() => setIsContactOpen(true)} />
      <CookieConsent onConsentChange={setCookieConsent} />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
