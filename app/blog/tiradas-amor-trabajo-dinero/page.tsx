import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Tarot Amor-Trabajo-Dinero: Las 7 Tiradas más Certeras de 2025',
  description: 'Descubre las tiradas de tarot más efectivas para consultas sobre amor, trabajo y dinero en 2025.',
  keywords: ['tiradas de tarot', 'tarot amor', 'tarot trabajo', 'tarot dinero'],
}

export default function ArticlePage() {
  return (
    <>
      <article className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-mystic-900 to-night-900 text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="text-gold-400 hover:text-gold-300 mb-6 inline-block">
              ← Volver al blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tarot Amor-Trabajo-Dinero: Las 7 Tiradas más Certeras de 2025
            </h1>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-xl mb-8">
            Contenido completo próximamente. Consultá ahora para una tirada personalizada.
          </p>

          <div className="bg-mystic-50 p-8 rounded-xl text-center my-12">
            <h3 className="text-2xl font-bold mb-4">¿Necesitás una tirada profesional?</h3>
            <WhatsAppButton message="Hola, quiero una tirada de tarot sobre amor/trabajo/dinero">
              Agendar consulta
            </WhatsAppButton>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
