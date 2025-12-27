import Section from './Section'
import SectionTitle from './SectionTitle'
import { MessageCircle, Calendar, Sparkles, HelpCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: 'Contactá por WhatsApp',
      description: 'Escribime contándome brevemente tu situación o qué tipo de lectura te interesa. Te respondo rápido.',
    },
    {
      number: 2,
      icon: Calendar,
      title: 'Coordinamos juntos',
      description: 'Elegimos el mejor día y horario para tu consulta. Acordamos modalidad: videollamada, llamada o mensaje.',
    },
    {
      number: 3,
      icon: Sparkles,
      title: 'Realizamos la tirada',
      description: 'Durante 30-75 minutos (según el tipo de consulta), trabajo con las cartas mientras vos participás activamente.',
    },
    {
      number: 4,
      icon: HelpCircle,
      title: 'Espacio para preguntas',
      description: 'Al finalizar, tenés tiempo para hacer todas las preguntas que necesites. Es tu momento.',
    },
  ]

  return (
    <Section id="como-es-consulta" background="mystic">
      <SectionTitle 
        title="¿Cómo es una consulta?"
        subtitle="Un proceso simple, cómodo y totalmente personalizado"
      />

      {/* Timeline visual */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mystic-300 via-gold-300 to-night-300 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row gap-6 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Contenido */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-mystic-500 to-night-600 ${
                        index % 2 === 0 ? 'md:order-2' : ''
                      }`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Número central */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Spacer para mantener el layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-mystic-700">
            Detalles importantes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-bold text-lg mb-2 text-mystic-600">Modalidad</h4>
              <p className="text-sm leading-relaxed">
                Trabajamos 100% online por <strong>videollamada (WhatsApp o Zoom)</strong>, 
                llamada telefónica o mensajes de voz/texto según tu preferencia.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2 text-mystic-600">Duración</h4>
              <p className="text-sm leading-relaxed">
                <strong>30 a 75 minutos</strong> dependiendo del tipo de tirada. 
                Siempre nos tomamos el tiempo necesario, sin apuros.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2 text-mystic-600">Confidencialidad</h4>
              <p className="text-sm leading-relaxed">
                Todo lo que compartís queda en <strong>absoluta confidencialidad</strong>. 
                Trabajamos en un espacio de respeto y confianza mutua.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2 text-mystic-600">Reprogramación</h4>
              <p className="text-sm leading-relaxed">
                Si necesitás cambiar el horario, avisame con anticipación y 
                <strong> reprogramamos sin problema</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
