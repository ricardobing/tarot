import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ShareButtons from '@/components/blog/ShareButtons'
import WhatsAppButton from '@/components/WhatsAppButton'
import FAQAccordion from '@/components/FAQAccordion'
import Footer from '@/components/Footer'
import { Calendar, Clock, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tarot Online vs Presencial: ¿Por Qué la Lectura Virtual es Tendencia en 2025?',
  description: 'Descubre las ventajas del tarot online, por qué cada vez más personas eligen lecturas virtuales y cómo obtener una consulta profesional desde tu hogar en 2025.',
  keywords: ['tarot online', 'tarot virtual', 'lectura de tarot por videollamada', 'tarot por whatsapp', 'consulta de tarot online'],
  openGraph: {
    title: 'Tarot Online vs Presencial: La Revolución Virtual en 2025',
    description: 'Todo lo que necesitás saber sobre el tarot online y por qué se ha vuelto la modalidad preferida',
    images: ['/blog/tarot-online-vs-presencial.jpg'],
  },
}

export default function ArticlePage() {
  const faqs = [
    {
      question: '¿El tarot online es tan efectivo como el presencial?',
      answer: 'Sí, absolutamente. La energía y la conexión en una lectura de tarot no dependen de la presencia física. Miles de tarotistas profesionales confirman que las lecturas online son igual de precisas y profundas que las presenciales.',
    },
    {
      question: '¿Qué plataforma es mejor para una consulta de tarot online?',
      answer: 'WhatsApp y Zoom son las plataformas más utilizadas. WhatsApp permite consultas por videollamada, llamada o mensajes, mientras que Zoom ofrece mejor calidad de video. Ambas son seguras y confiables.',
    },
    {
      question: '¿Cómo me preparo para una lectura de tarot online?',
      answer: 'Busca un espacio tranquilo sin interrupciones, asegura buena conexión a internet, ten tus preguntas claras y abre tu mente para recibir la orientación. Es lo mismo que harías para una consulta presencial.',
    },
    {
      question: '¿Es seguro compartir información personal en una consulta online?',
      answer: 'Sí, siempre que elijas un profesional ético. Las consultas por plataformas encriptadas como WhatsApp son seguras, y los tarotistas profesionales mantienen total confidencialidad.',
    },
    {
      question: '¿Cuánto cuesta una consulta de tarot online en Argentina?',
      answer: 'Los precios varían según la experiencia del tarotista y la duración. En Argentina, las consultas online suelen costar entre $5,000 y $15,000 pesos (2025). Siempre pregunta el valor antes de agendar.',
    },
  ]

  return (
    <>
      <article className="min-h-screen bg-white">
        {/* Header del artículo */}
        <header className="bg-gradient-to-r from-mystic-900 to-night-900 text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="text-gold-400 hover:text-gold-300 mb-6 inline-block">
              ← Volver al blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-mystic-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                Guías de Tarot
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Tarot Online vs Presencial: ¿Por Qué la Lectura Virtual es Tendencia en 2025?
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>15 de Enero, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 minutos de lectura</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Por Tarot Profesional</span>
              </div>
            </div>
          </div>
        </header>

        {/* Imagen destacada */}
        <div className="relative h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&q=80"
            alt="Tarot Online vs Presencial"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido del artículo */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introducción */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Si estás considerando una consulta de tarot pero no estás segur@ si hacerla online o esperar para una sesión presencial, 
              este artículo es para vos. En 2025, <strong>el tarot online se ha convertido en la modalidad preferida</strong> de miles 
              de personas en Argentina y Latinoamérica, y no es casualidad.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              La pandemia aceleró una transformación que ya venía gestándose: la digitalización de servicios espirituales y terapéuticos. 
              Hoy, el tarot por videollamada no es solo una alternativa, sino una opción igual de válida, profunda y efectiva que las consultas cara a cara.
            </p>

            {/* Sección 1 */}
            <h2 className="text-3xl font-bold text-mystic-900 mt-12 mb-6">
              ¿Qué es el Tarot Online y Cómo Funciona?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              El <strong>tarot online</strong> es una lectura de cartas realizada a través de plataformas digitales como WhatsApp, Zoom, Skype o Google Meet. 
              La tarotista realiza la tirada físicamente (con sus propias cartas), mientras vos participás desde tu casa, trabajo o cualquier lugar 
              donde te sientas cómodo.
            </p>

            <div className="bg-mystic-50 border-l-4 border-mystic-500 p-6 rounded-r-lg my-8">
              <p className="text-mystic-900 font-semibold text-lg italic">
                "La energía no conoce distancias. Una lectura online bien hecha conecta igual que una presencial, 
                porque lo que importa es la intención y la apertura del consultante."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Modalidades de Tarot Online Más Comunes
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-gold-500 font-bold text-xl mt-1">•</span>
                <div>
                  <strong>Videollamada en vivo:</strong> La forma más popular. Ves a la tarotista, las cartas y podés interactuar en tiempo real.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 font-bold text-xl mt-1">•</span>
                <div>
                  <strong>Llamada telefónica:</strong> Solo audio, ideal si preferís no usar video pero querés la inmediatez de la conversación.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 font-bold text-xl mt-1">•</span>
                <div>
                  <strong>Mensajes de voz/texto:</strong> La tarotista graba audios explicando cada carta o envía un informe escrito. Útil si tenés diferencia horaria.
                </div>
              </li>
            </ul>

            {/* Sección 2 */}
            <h2 className="text-3xl font-bold text-mystic-900 mt-12 mb-6">
              Tarot Online vs Presencial: Comparación Completa
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-mystic-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left">Aspecto</th>
                    <th className="border border-gray-300 p-4 text-left">Tarot Online</th>
                    <th className="border border-gray-300 p-4 text-left">Tarot Presencial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Comodidad</td>
                    <td className="border border-gray-300 p-4">✅ Desde tu hogar, sin viajes</td>
                    <td className="border border-gray-300 p-4">❌ Requiere desplazamiento</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Acceso</td>
                    <td className="border border-gray-300 p-4">✅ Tarotistas de cualquier lugar</td>
                    <td className="border border-gray-300 p-4">❌ Limitado a tu zona</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Precio</td>
                    <td className="border border-gray-300 p-4">✅ Suele ser más accesible</td>
                    <td className="border border-gray-300 p-4">❌ Más caro (alquiler local)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Conexión</td>
                    <td className="border border-gray-300 p-4">✅ Igual de profunda</td>
                    <td className="border border-gray-300 p-4">✅ Igual de profunda</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Flexibilidad</td>
                    <td className="border border-gray-300 p-4">✅ Más horarios disponibles</td>
                    <td className="border border-gray-300 p-4">❌ Horarios limitados</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sección 3 */}
            <h2 className="text-3xl font-bold text-mystic-900 mt-12 mb-6">
              5 Ventajas del Tarot Online que No Conocías
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Acceso a Tarotistas Especializados de Todo el Mundo
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ya no estás limitado a los tarotistas de tu ciudad. Podés consultar con profesionales de Argentina, España, México o cualquier 
              país hispanohablante, eligiendo al que mejor resuene con tu energía.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Mayor Privacidad y Confidencialidad
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Muchas personas se sienten más cómodas consultando desde la privacidad de su hogar, donde pueden abrirse sin temor a ser vistos 
              entrando o saliendo de un local de tarot.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Grabaciones de la Sesión (Con Permiso)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Algunas tarotistas permiten grabar la consulta para que puedas revisarla después. Esto es especialmente útil cuando recibís 
              mucha información y querés procesarla con calma.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Ahorro de Tiempo y Dinero
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sin viajes, estacionamiento ni transporte público. El dinero y tiempo que ahorrarías en traslados lo podés invertir en 
              una consulta más larga o detallada.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Flexibilidad Horaria
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Los tarotistas que trabajan online suelen ofrecer horarios más amplios, incluyendo noches y fines de semana, 
              adaptándose mejor a tu agenda.
            </p>

            {/* CTA intermedio */}
            <div className="bg-gradient-to-r from-mystic-600 to-night-600 text-white rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                ¿Lista para probar una consulta online profesional?
              </h3>
              <p className="text-lg mb-6">
                35 años de experiencia a tu disposición desde donde estés
              </p>
              <WhatsAppButton message="Hola, quiero consultar por una lectura de tarot online">
                Agendar mi consulta online
              </WhatsAppButton>
            </div>

            {/* Sección 4 */}
            <h2 className="text-3xl font-bold text-mystic-900 mt-12 mb-6">
              ¿Es el Tarot Online Para Vos?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              El tarot online es ideal si:
            </p>

            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-mystic-600 font-bold mt-1">✓</span>
                <span>Vivís lejos de tarotistas profesionales o en zonas rurales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mystic-600 font-bold mt-1">✓</span>
                <span>Tenés agenda complicada y necesitás flexibilidad horaria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mystic-600 font-bold mt-1">✓</span>
                <span>Preferís la comodidad de tu hogar para abrirte emocionalmente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mystic-600 font-bold mt-1">✓</span>
                <span>Querés consultar con tarotistas especializados que no están en tu ciudad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mystic-600 font-bold mt-1">✓</span>
                <span>Buscás una opción más accesible económicamente</span>
              </li>
            </ul>

            {/* Sección 5 */}
            <h2 className="text-3xl font-bold text-mystic-900 mt-12 mb-6">
              Consejos Para Elegir un Tarotista Online Confiable
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-lg mb-4 text-mystic-700">Checklist de Confiabilidad:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Años de experiencia:</strong> Buscá tarotistas con al menos 10+ años de trayectoria</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Testimonios reales:</strong> Pedí referencias o buscá opiniones de consultantes anteriores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Transparencia en precios:</strong> Deben informar claramente el costo antes de la consulta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Ética profesional:</strong> No prometen soluciones mágicas ni te presionan para comprar servicios extras</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Comunicación clara:</strong> Responden rápido y profesionalmente tus consultas previas</span>
                </li>
              </ul>
            </div>

            {/* Conclusión */}
            <h2 className="text-3xl font-bold text-mystic-900 mt-12 mb-6">
              Conclusión: El Futuro del Tarot es Híbrido
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              En 2025, el debate entre tarot online y presencial ha quedado atrás. La realidad es que <strong>ambas modalidades son válidas</strong>, 
              y la elección depende de tus preferencias, disponibilidad y circunstancias personales.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Lo más importante no es el medio, sino <strong>la calidad de la conexión, la experiencia del tarotista y tu apertura 
              para recibir la guía</strong>. Muchos consultantes combinan ambas: consultas online para seguimiento rápido y presenciales 
              para momentos especiales.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Si todavía no probaste el tarot online, este es el momento perfecto. La tecnología ha democratizado el acceso a la orientación 
              espiritual, permitiendo que miles de personas encuentren claridad sin importar dónde estén.
            </p>

            {/* FAQs */}
            <h2 className="text-3xl font-bold text-mystic-900 mt-12 mb-6">
              Preguntas Frecuentes sobre Tarot Online
            </h2>

            <FAQAccordion faqs={faqs} />

            {/* Share buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <ShareButtons 
                title="Tarot Online vs Presencial: ¿Por Qué la Lectura Virtual es Tendencia en 2025?"
                url="https://tarot-profesional.vercel.app/blog/tarot-online-vs-presencial"
              />
            </div>

            {/* CTA final */}
            <div className="bg-mystic-50 rounded-xl p-8 my-12 text-center border-2 border-mystic-200">
              <h3 className="text-2xl font-bold text-mystic-900 mb-4">
                ¿Querés experimentar una lectura online profesional?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Conectate con 35 años de sabiduría del tarot desde la comodidad de tu hogar
              </p>
              <WhatsAppButton message="Hola, leí el artículo y quiero agendar una consulta online">
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>

            {/* Artículos relacionados */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Artículos Relacionados
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/como-aprender-tarot-guia-completa" className="block p-4 border border-gray-200 rounded-lg hover:border-mystic-500 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg text-mystic-700 mb-2">
                    Cómo Aprender Tarot: Guía Completa
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Todo lo que necesitás saber para empezar tu camino en el tarot...
                  </p>
                </Link>
                <Link href="/blog/tarot-sin-gabinete" className="block p-4 border border-gray-200 rounded-lg hover:border-mystic-500 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg text-mystic-700 mb-2">
                    Tarot Sin Gabinete: Ventajas
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Por qué las consultas directas son más personalizadas...
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
