/**
 * Configuración centralizada del sitio
 * Modificá estos valores para personalizar fácilmente
 */

export const siteConfig = {
  name: 'Tarot Profesional',
  title: 'Tarot Profesional Online | 35 Años de Experiencia | Consultas por WhatsApp',
  description: 'Lecturas de tarot profesionales con 35 años de experiencia. Orientación en amor, trabajo y decisiones. Consultas online por WhatsApp. Atención personalizada desde Argentina.',
  url: 'https://tarot-profesional.vercel.app',
  ogImage: '/og-image.jpg',
  
  // Contacto
  whatsapp: {
    number: '+5493442625134',
    defaultMessage: 'Hola, quiero consultar por una lectura de tarot',
  },
  
  // Profesional
  professional: {
    name: 'Profesional de Tarot',
    experience: 35,
    age: 70,
    location: 'Argentina',
    specialties: ['Tarot', 'Astrología', 'Orientación Espiritual'],
  },
  
  // Redes sociales (placeholders)
  social: {
    instagram: '#',
    facebook: '#',
    email: 'contacto@ejemplo.com',
  },
  
  // SEO Keywords
  keywords: [
    'tarot',
    'lectura de tarot',
    'tarot online',
    'consultas de tarot',
    'tarot orientación',
    'tarot profesional',
    'tarotista argentina',
    'tarot whatsapp',
    'lectura de cartas online',
    'consulta de tarot por videollamada',
    'tarot amor trabajo dinero',
    'tiradas de tarot',
  ],
  
  // Colores de marca
  colors: {
    primary: '#D4AF37', // Dorado místico
    purple: '#4A148C', // Púrpura profundo
    purpleLight: '#6A1B9A',
    blue: '#1A237E', // Azul noche
    blueLight: '#283593',
    emerald: '#004D40',
    beige: '#EFEBE9',
    black: '#212121',
  },
}

export const whatsappUrl = (message?: string) => {
  const text = message || siteConfig.whatsapp.defaultMessage
  return `https://wa.me/${siteConfig.whatsapp.number.replace(/\+/g, '')}?text=${encodeURIComponent(text)}`
}
