import Section from './Section'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

export default function TarotGallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1617447167817-a4e49a4a8f4e?w=600&q=80&fit=crop',
      alt: 'Cartas de Tarot Místicas con Cristales',
    },
    {
      src: 'https://images.unsplash.com/photo-1595123550441-d377e017de6a?w=600&q=80&fit=crop',
      alt: 'Lectura de Tarot Profesional',
    },
    {
      src: 'https://images.unsplash.com/photo-1579170053380-58064b2dee67?w=600&q=80&fit=crop',
      alt: 'Mazo de Tarot Rider-Waite',
    },
    {
      src: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&q=80&fit=crop',
      alt: 'Tirada de Tarot en Mesa de Madera',
    },
    {
      src: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&q=80&fit=crop',
      alt: 'Cartas de Tarot con Velas',
    },
    {
      src: 'https://images.unsplash.com/photo-1532798442725-41036acc7489?w=600&q=80&fit=crop',
      alt: 'Lectura de Tarot Espiritual',
    },
  ]

  return (
    <Section id="galeria-tarot" background="mystic">
      <SectionTitle 
        title="El Arte del Tarot"
        subtitle="Cada carta cuenta una historia, cada tirada revela un camino"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mystic-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-semibold">
                  {image.alt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-700 text-lg italic">
          ✨ 35 años trabajando con las cartas para brindarte orientación y claridad ✨
        </p>
      </div>
    </Section>
  )
}
