import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Cómo Aprender Tarot: Guía Completa para Principiantes [2025]',
  description: 'Guía completa para comenzar en el tarot: desde elegir tu primer mazo hasta realizar tus primeras lecturas profesionales.',
  keywords: ['aprender tarot', 'curso de tarot', 'tarot para principiantes', 'como leer el tarot'],
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
              Cómo Aprender Tarot: Guía Completa para Principiantes [2025]
            </h1>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-xl mb-8">
            Contenido completo próximamente. Mientras tanto, contactanos para consultas personalizadas.
          </p>

          <div className="bg-mystic-50 p-8 rounded-xl text-center my-12">
            <h3 className="text-2xl font-bold mb-4">¿Querés aprender de una profesional con 35 años de experiencia?</h3>
            <WhatsAppButton message="Hola, me interesa aprender sobre el tarot">
              Consultar por clases
            </WhatsAppButton>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
