'use client'

import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/config/site'

interface WhatsAppButtonProps {
  message?: string
  variant?: 'primary' | 'secondary' | 'floating'
  children?: React.ReactNode
  className?: string
}

export default function WhatsAppButton({ 
  message, 
  variant = 'primary', 
  children,
  className = ''
}: WhatsAppButtonProps) {
  const url = whatsappUrl(message)
  
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-full'
  
  const variants = {
    primary: 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-6 py-3',
    floating: 'fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 shadow-2xl animate-pulse-slow hover:scale-110',
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      {children || 'Consultá por WhatsApp'}
    </a>
  )
}
