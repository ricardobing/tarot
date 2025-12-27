'use client'

import { useState, useEffect } from 'react'
import WhatsAppButton from './WhatsAppButton'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar después de 300px de scroll
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className={`transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <WhatsAppButton 
        variant="floating"
        message="Hola, vi tu sitio web y quiero consultar"
      >
        <span className="sr-only">Contactar por WhatsApp</span>
      </WhatsAppButton>
      
      {/* Badge de "Respondemos rápido" */}
      <div className="fixed bottom-24 right-6 z-50 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse">
        Respondemos en minutos
      </div>
    </div>
  )
}
