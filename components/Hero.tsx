import { Sparkles, CheckCircle, Clock } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1617447167817-a4e49a4a8f4e?w=1920&q=80&fit=crop"
          alt="Cartas de Tarot Místicas"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-900/95 via-night-900/90 to-black/95" />
      </div>

      {/* Elementos flotantes decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-mystic-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-night-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de experiencia */}
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 font-semibold">35 años de experiencia</span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-gold-400 via-mystic-300 to-white bg-clip-text text-transparent">
              Encontrá claridad en tiempos de incertidumbre
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Lecturas de Tarot profesionales que iluminan tu camino. <br className="hidden md:block" />
            Orientación en amor, trabajo y decisiones importantes.
          </p>

          {/* Indicadores de confianza */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Atendiendo consultas hoy</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Clock className="w-5 h-5" />
              <span>Respuesta en 24hs</span>
            </div>
            <div className="flex items-center gap-2 text-mystic-400">
              <Sparkles className="w-5 h-5" />
              <span>+1000 consultas realizadas</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <WhatsAppButton message="Hola, quiero agendar mi primera consulta">
              Consultá ahora por WhatsApp
            </WhatsAppButton>
            <a 
              href="#como-es-consulta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Cómo es la consulta
            </a>
          </div>

          {/* Prueba social */}
          <p className="mt-8 text-gray-400 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
            ✨ <span className="text-gold-400 font-semibold">María L.</span> y más de 800 personas ya encontraron su respuesta
          </p>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
