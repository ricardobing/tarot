import Section from './Section'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function AboutProfessional() {
  return (
    <Section id="sobre-tarotista" background="light">
      <SectionTitle 
        title="Sobre la Profesional"
        subtitle="Una vida dedicada a la orientación y el acompañamiento espiritual"
      />

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="flex justify-center">
          <div className="relative">
            {/* Borde místico */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-500 via-mystic-500 to-night-500 rounded-full blur-lg opacity-30 animate-pulse-slow" />
            
            {/* Imagen */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold-500 shadow-2xl">
              <Image
                src="https://ui-avatars.com/api/?name=Tarot+Professional&size=400&background=4A148C&color=D4AF37&bold=true"
                alt="Tarotista Profesional"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge de experiencia */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full shadow-xl font-bold">
              35 años de experiencia
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-mystic-50 border-l-4 border-mystic-500 p-6 rounded-r-lg">
            <Quote className="w-8 h-8 text-mystic-500 mb-3" />
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "Mi propósito es acompañarte en tu camino, brindándote claridad y orientación 
              con respeto, ética y sensibilidad. Cada consulta es un espacio sagrado donde 
              tu voz es escuchada sin juicios."
            </p>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Con <strong>70 años de vida y 35 años dedicados al Tarot y la Astrología</strong>, 
              he acompañado a cientos de personas en sus momentos más importantes de decisión y transformación.
            </p>
            
            <p>
              Mi enfoque es <strong>humano, ético y profundamente respetuoso</strong>. Creo en el 
              Tarot como herramienta de autoconocimiento y orientación, no como predicción rígida del destino.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-3">
              <h4 className="font-bold text-mystic-700 text-lg">Mi formación y enfoque:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 font-bold mt-1">✦</span>
                  <span>35 años de práctica continua en lectura del Tarot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 font-bold mt-1">✦</span>
                  <span>Formación en Astrología y lectura intuitiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 font-bold mt-1">✦</span>
                  <span>Enfoque ético y respetuoso con cada consultante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 font-bold mt-1">✦</span>
                  <span>Basada en Argentina, atiendo todo Latinoamérica</span>
                </li>
              </ul>
            </div>

            <p>
              Trabajo <strong>desde Argentina de forma 100% online</strong>, lo que me permite 
              llegar a personas de todo el mundo hispanohablante que buscan orientación con calidez y profesionalismo.
            </p>
          </div>

          {/* Firma digital */}
          <div className="pt-4 border-t border-gray-200">
            <p className="font-signature text-3xl text-mystic-700" style={{ fontFamily: 'cursive' }}>
              Con amor y luz ✨
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
