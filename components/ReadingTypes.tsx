import Section from './Section'
import SectionTitle from './SectionTitle'
import { Clock, Sparkles, Heart, Calendar } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import Image from 'next/image'

export default function ReadingTypes() {
  const types = [
    {
      icon: Sparkles,
      name: 'Tirada General',
      description: 'Una visión completa de tu vida actual: amor, trabajo, salud y camino espiritual.',
      duration: '45-60 minutos',
      price: 'Consultá valor',
      highlight: false,
      message: 'Hola, me interesa la tirada general',
      image: 'https://images.unsplash.com/photo-1579170053380-58064b2dee67?w=400&h=300&fit=crop',
    },
    {
      icon: Heart,
      name: 'Tirada Específica',
      description: 'Enfocada en una pregunta puntual o situación concreta que necesités resolver.',
      duration: '30-40 minutos',
      price: 'Consultá valor',
      highlight: true,
      message: 'Hola, quiero una tirada específica sobre...',
      image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=300&fit=crop',
    },
    {
      icon: Calendar,
      name: 'Tirada de Año Personal',
      description: 'Panorama de los próximos 12 meses: oportunidades, desafíos y momentos clave.',
      duration: '60-75 minutos',
      price: 'Consultá valor',
      highlight: false,
      message: 'Hola, me interesa la tirada de año personal',
      image: 'https://images.unsplash.com/photo-1518241353330-0f0607d514ca?w=400&h=300&fit=crop',
    },
    {
      icon: Heart,
      name: 'Tirada de Compatibilidad',
      description: 'Análisis de vínculos: pareja, familia o relaciones importantes en tu vida.',
      duration: '40-50 minutos',
      price: 'Consultá valor',
      highlight: false,
      message: 'Hola, quiero una tirada de compatibilidad',
    },
  ]

  return (
    <Section id="tipos-tiradas" background="gradient">
      <SectionTitle 
        title="Tipos de Tiradas y Consultas"
        subtitle="Elegí la lectura que mejor se adapte a lo que necesitás en este momento"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {types.map((type, index) => (
          <div 
            key={index}
            className={`relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/20 ${
              type.highlight ? 'ring-2 ring-gold-500 shadow-2xl' : 'border border-white/20'
            }`}
          >
            {type.highlight && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold text-center py-2">
                MÁS ELEGIDA
              </div>
            )}
            
            {/* Imagen de las cartas */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={type.image}
                alt={type.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mystic-purple-900" />
            </div>
            
            <div className={`p-6 ${type.highlight ? 'pt-6' : ''}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 mb-4">
                <type.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white">
                {type.name}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed min-h-[80px]">
                {type.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span className="text-sm">{type.duration}</span>
                </div>
                <div className="text-2xl font-bold text-gold-400">
                  {type.price}
                </div>
              </div>
              
              <WhatsAppButton 
                message={type.message}
                className="w-full !py-3"
              >
                Agendar esta tirada
              </WhatsAppButton>
            </div>

            {/* Decoración mística */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-white text-lg mb-4">
            <strong>¿No estás seguro cuál elegir?</strong> Contactame y te ayudo a decidir qué tirada es mejor para tu situación.
          </p>
          <WhatsAppButton message="Hola, necesito ayuda para elegir la tirada adecuada">
            Ayudame a elegir
          </WhatsAppButton>
        </div>
      </div>
    </Section>
  )
}
