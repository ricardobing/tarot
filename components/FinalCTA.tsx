import Section from './Section'
import WhatsAppButton from './WhatsAppButton'
import { Sparkles, Clock } from 'lucide-react'

export default function FinalCTA() {
  return (
    <Section background="gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-gold-400 mx-auto mb-6 animate-pulse-slow" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            ¿Sentís que necesitás claridad?
            <br />
            <span className="text-gold-400">Este es tu momento</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Tu primera consulta puede ser el inicio de tu transformación personal
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
          <p className="text-lg text-gray-200 mb-6">
            Cuando estás list@ para escuchar lo que las cartas tienen para decirte, 
            el universo conspira para mostrarte el camino. <strong className="text-gold-400">No es casualidad que estés acá</strong>.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gold-300 mb-6">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Agendas limitadas esta semana</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              variant="primary"
              message="Hola, quiero agendar mi consulta de tarot"
              className="text-xl px-10 py-5"
            >
              Quiero mi consulta ahora
            </WhatsAppButton>
            
            <a 
              href="#tipos-tiradas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Ver tipos de consultas
            </a>
          </div>
        </div>

        <div className="space-y-4 text-gray-300">
          <p className="text-sm">
            📱 Te respondo en menos de 24 horas
          </p>
          <p className="text-sm">
            ✨ Primera consulta con descuento especial (preguntá por WhatsApp)
          </p>
          <p className="text-sm">
            🌎 Atención online desde Argentina para toda Latinoamérica
          </p>
        </div>
      </div>
    </Section>
  )
}
