'use client'

import { useState } from 'react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const backgroundImage = 'https://images.unsplash.com/photo-1532798442725-d26e50b5aa5b?w=1920&h=800&fit=crop&q=80'

  const testimonials = [
    {
      name: 'María L.',
      location: 'Buenos Aires',
      avatar: 'https://ui-avatars.com/api/?name=M+L&background=4A148C&color=fff&size=100',
      date: 'hace 2 semanas',
      rating: 5,
      text: 'Increíble la claridad que me dio en un momento muy confuso de mi vida. Me ayudó a tomar una decisión importante sobre mi relación con mucha sensibilidad. Súper recomendable.',
    },
    {
      name: 'Jorge R.',
      location: 'Córdoba',
      avatar: 'https://ui-avatars.com/api/?name=J+R&background=1A237E&color=fff&size=100',
      date: 'hace 1 mes',
      rating: 5,
      text: 'Consulté por un cambio laboral y la tirada fue muy certera. Me dio una perspectiva que no había considerado. Profesional, empática y muy clara en sus explicaciones.',
    },
    {
      name: 'Lucía P.',
      location: 'Rosario',
      avatar: 'https://ui-avatars.com/api/?name=L+P&background=D4AF37&color=000&size=100',
      date: 'hace 3 semanas',
      rating: 5,
      text: 'Estaba bloqueada hace meses y después de la consulta pude ver mi situación desde otro lugar. No solo me leyó las cartas, me escuchó de verdad. Volví a consultarla al mes siguiente.',
    },
    {
      name: 'Martín G.',
      location: 'Mendoza',
      avatar: 'https://ui-avatars.com/api/?name=M+G&background=6A1B9A&color=fff&size=100',
      date: 'hace 2 meses',
      rating: 5,
      text: 'Hacía años que buscaba un tarotista serio y profesional. Encontré exactamente eso: experiencia, respeto y mucha sabiduría. Las predicciones se fueron cumpliendo con el tiempo.',
    },
    {
      name: 'Andrea C.',
      location: 'Mar del Plata',
      avatar: 'https://ui-avatars.com/api/?name=A+C&background=004D40&color=fff&size=100',
      date: 'hace 1 semana',
      rating: 5,
      text: 'Me acompañó en un momento de cambio muy importante. Su enfoque es contenedor pero también realista. Me dio herramientas para entender mejor mi proceso. Gracias infinitas.',
    },
    {
      name: 'Silvia M.',
      location: 'Santiago del Estero',
      avatar: 'https://ui-avatars.com/api/?name=S+M&background=8E24AA&color=fff&size=100',
      date: 'hace 3 días',
      rating: 5,
      text: 'Consulté por videollamada desde el interior y fue como estar en persona. Muy cálida, profesional y las cartas fueron exactas a lo que estoy viviendo. 100% recomendada.',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Section id="testimonios" background="gradient">
      {/* Fondo con imagen de cartas de tarot */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Tarot cards background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-purple-900/90 via-mystic-purple-900/95 to-mystic-purple-900" />
      </div>
      
      <div className="relative z-10">
        <SectionTitle 
          title="Lo que dicen quienes consultaron"
          subtitle="Testimonios reales de personas que encontraron claridad"
        />

        {/* Desktop: Grid de 3 columnas */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      {/* Mobile: Carrusel */}
      <div className="md:hidden relative">
        <TestimonialCard testimonial={testimonials[currentIndex]} />
        
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-gold-400' : 'w-2 bg-white/30'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Más testimonios en desktop */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {testimonials.slice(3).map((testimonial, index) => (
          <TestimonialCard key={index + 3} testimonial={testimonial} />
        ))}
      </div>
      </div>
    </Section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full border-2 border-gold-400"
        />
        <div className="flex-1">
          <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
          <p className="text-gray-300 text-sm">{testimonial.location}</p>
          <p className="text-gray-400 text-xs">{testimonial.date}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
        ))}
      </div>

      <div className="relative">
        <div className="absolute -top-2 -left-2 text-6xl text-gold-400/20 font-serif">"</div>
        <p className="text-gray-200 leading-relaxed relative z-10 italic">
          {testimonial.text}
        </p>
      </div>
    </div>
  )
}
