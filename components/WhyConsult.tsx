import Section from './Section'
import SectionTitle from './SectionTitle'
import { Heart, Briefcase, Ban, Lightbulb, TrendingUp } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

export default function WhyConsult() {
  const reasons = [
    {
      icon: Heart,
      title: 'Amor y Relaciones',
      description: 'Claridad sobre vínculos, decisiones del corazón y caminos en pareja o soltería.',
      testimonial: '"Me ayudó a entender qué necesitaba en mi relación" - S.M., Córdoba',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Decisiones Laborales',
      description: 'Orientación para cambios de trabajo, nuevos proyectos o vocación profesional.',
      testimonial: '"Tomé la mejor decisión de mi carrera gracias a la consulta" - J.R., Buenos Aires',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Ban,
      title: 'Momentos de Bloqueo',
      description: 'Cuando sentís que estás estancado y necesitás ver tu situación desde otra perspectiva.',
      testimonial: '"Pude salir de un bloqueo que tenía hace meses" - L.P., Rosario',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Lightbulb,
      title: 'Búsqueda de Claridad',
      description: 'Cuando tenés dudas profundas y necesitás respuestas que te devuelvan paz interior.',
      testimonial: '"Encontré las respuestas que buscaba hace tanto tiempo" - M.G., Mendoza',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: TrendingUp,
      title: 'Procesos de Cambio',
      description: 'Acompañamiento en transiciones vitales importantes y transformaciones personales.',
      testimonial: '"Me acompañó en un momento crucial de cambio en mi vida" - A.C., Mar del Plata',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <Section id="para-que-consultar" background="mystic">
      <SectionTitle 
        title="¿Para qué consultar el Tarot?"
        subtitle="Cada lectura es única y personalizada según lo que necesités en este momento"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div 
            key={index}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
          >
            <div className={`h-2 bg-gradient-to-r ${reason.color}`} />
            
            <div className="p-6">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${reason.color} mb-4`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {reason.description}
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-mystic-300">
                <p className="text-sm text-gray-700 italic">
                  {reason.testimonial}
                </p>
              </div>
              
              <div className="mt-4">
                <WhatsAppButton 
                  variant="secondary"
                  message={`Hola, me interesa consultar sobre ${reason.title.toLowerCase()}`}
                  className="w-full text-sm py-2 !bg-mystic-600 hover:!bg-mystic-700"
                >
                  Consultar sobre esto
                </WhatsAppButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-6">
          ¿No encontrás tu situación? <strong>Cada consulta es personalizada</strong> y podemos trabajar con cualquier tema que te preocupe.
        </p>
        <WhatsAppButton message="Hola, tengo una consulta personalizada">
          Contáme tu situación
        </WhatsAppButton>
      </div>
    </Section>
  )
}
