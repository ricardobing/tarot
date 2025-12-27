import Section from './Section'
import SectionTitle from './SectionTitle'
import { Heart, Briefcase, Lock as LockIcon, Compass, RefreshCw } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

export default function AboutReadings() {
  return (
    <Section id="que-son-lecturas" background="light">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle 
            title="¿En qué consisten las lecturas de Tarot?"
            centered={false}
          />
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Una lectura de Tarot es un espacio de <strong>orientación y claridad</strong> donde las cartas 
              actúan como espejo de tu situación actual y las posibilidades que se abren ante vos.
            </p>
            <p>
              <strong>No predecimos el futuro de forma rígida</strong>, sino que iluminamos tu presente 
              para que puedas tomar decisiones más conscientes y alineadas con tu verdadero camino.
            </p>
            <p>
              Cada consulta es un proceso terapéutico y de autoconocimiento, donde trabajamos juntos 
              para entender mensajes, superar bloqueos y encontrar respuestas que ya están dentro tuyo.
            </p>
            
            <div className="bg-mystic-50 border-l-4 border-mystic-500 p-6 rounded-r-lg mt-8">
              <p className="text-mystic-900 font-semibold text-lg italic">
                "No predecimos tu futuro, iluminamos tu presente para que construyas el mañana que deseás"
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-mystic-500 to-night-600 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Enfoque de la lectura</h3>
            <ul className="space-y-4">
              {[
                { icon: Heart, text: 'Orientación empática y contenedora' },
                { icon: Compass, text: 'Guía para decisiones importantes' },
                { icon: RefreshCw, text: 'Claridad en momentos de cambio' },
                { icon: LockIcon, text: 'Espacio confidencial y sin juicios' },
                { icon: Briefcase, text: 'Enfoque práctico y realista' },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <span className="text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <WhatsAppButton message="Hola, quiero saber más sobre las lecturas de tarot">
              Consultá sin compromiso
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </Section>
  )
}
