import { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/blog/ArticleCard'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Blog de Tarot | Guías, Consejos y Artículos sobre Tarot y Espiritualidad',
  description: 'Aprende sobre tarot, astrología y espiritualidad con nuestros artículos profesionales. Guías, tiradas, interpretaciones y consejos de expertos.',
  openGraph: {
    title: 'Blog de Tarot Profesional',
    description: 'Artículos sobre tarot, astrología y espiritualidad',
    url: `${siteConfig.url}/blog`,
  },
}

const articles = [
  {
    slug: 'tarot-online-vs-presencial',
    title: 'Tarot Online vs Presencial: ¿Por Qué la Lectura Virtual es Tendencia en 2025?',
    excerpt: 'Descubre por qué el tarot online se ha convertido en la modalidad preferida de miles de personas y cómo obtener una lectura profesional desde la comodidad de tu hogar.',
    date: '15 Ene 2025',
    readingTime: '8 min',
    category: 'Guías de Tarot',
    thumbnail: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&q=80',
  },
  {
    slug: 'como-aprender-tarot-guia-completa',
    title: 'Cómo Aprender Tarot: Guía Completa para Principiantes [2025]',
    excerpt: 'Todo lo que necesitas saber para comenzar tu camino en el tarot: desde elegir tu primer mazo hasta realizar tus primeras lecturas con confianza.',
    date: '12 Ene 2025',
    readingTime: '12 min',
    category: 'Guías de Tarot',
    thumbnail: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?w=800&q=80',
  },
  {
    slug: 'tiradas-amor-trabajo-dinero',
    title: 'Tarot Amor-Trabajo-Dinero: Las 7 Tiradas más Certeras de 2025',
    excerpt: 'Las tiradas de tarot más efectivas para consultas sobre amor, trabajo y dinero. Aprende cuál es la ideal para tu situación.',
    date: '10 Ene 2025',
    readingTime: '10 min',
    category: 'Tiradas y Técnicas',
    thumbnail: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=800&q=80',
  },
  {
    slug: 'predicciones-tarot-2025',
    title: 'Predicciones Tarot 2025: Lo que Revelan las Cartas para Cada Signo',
    excerpt: 'Descubre qué te depara el 2025 según tu signo zodiacal. Predicciones, consejos y las mejores fechas para cada signo.',
    date: '1 Ene 2025',
    readingTime: '15 min',
    category: 'Predicciones 2025',
    thumbnail: 'https://images.unsplash.com/photo-1532798442725-41036acc7489?w=800&q=80',
  },
  {
    slug: 'tarot-sin-gabinete',
    title: 'Tarot Sin Gabinete: La Consulta Personalizada que Está Revolucionando Argentina',
    excerpt: 'Conoce las ventajas del tarot sin gabinete y por qué cada vez más personas prefieren consultas directas y personalizadas.',
    date: '28 Dic 2024',
    readingTime: '7 min',
    category: 'Tarot Online',
    thumbnail: 'https://images.unsplash.com/photo-1567696379180-4faf7b5a6431?w=800&q=80',
  },
  {
    slug: 'preguntas-perfectas-lectura-tarot',
    title: 'Cómo Preparar las Preguntas Perfectas para tu Lectura de Tarot 2025',
    excerpt: 'Aprende a formular preguntas efectivas que te permitan obtener las respuestas más claras y útiles en tu consulta de tarot.',
    date: '20 Dic 2024',
    readingTime: '9 min',
    category: 'Guías de Tarot',
    thumbnail: 'https://images.unsplash.com/photo-1527176930608-09cb256ab504?w=800&q=80',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero del Blog */}
      <section className="bg-gradient-to-r from-mystic-900 to-night-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog de Tarot Profesional
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Guías, consejos y conocimiento sobre Tarot, Astrología y Espiritualidad
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mystic-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitás una lectura personalizada?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            35 años de experiencia a tu disposición
          </p>
          <Link
            href="/#tipos-tiradas"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold px-8 py-4 rounded-full transition-all text-lg"
          >
            Ver tipos de consultas
          </Link>
        </div>
      </section>
    </main>
  )
}
