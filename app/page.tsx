import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import AboutReadings from '@/components/AboutReadings'
import WhyConsult from '@/components/WhyConsult'
import ReadingTypes from '@/components/ReadingTypes'
import TarotGallery from '@/components/TarotGallery'
import AboutProfessional from '@/components/AboutProfessional'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import TrustGuarantee from '@/components/TrustGuarantee'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://tarot-profesional.vercel.app/#business',
        name: 'Tarot Profesional',
        image: 'https://tarot-profesional.vercel.app/og-image.jpg',
        description: 'Lecturas de tarot profesionales con 35 años de experiencia',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'AR',
        },
        telephone: '+5493442625134',
        priceRange: '2>&1',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <main>
        <Hero />
        <TrustBar />
        <AboutReadings />
        <WhyConsult />
        <ReadingTypes />
        <TarotGallery />
        <AboutProfessional />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <TrustGuarantee />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
