import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  background?: 'light' | 'dark' | 'gradient' | 'mystic'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function Section({ 
  children, 
  id, 
  className = '', 
  background = 'light',
  containerSize = 'lg'
}: SectionProps) {
  const backgrounds = {
    light: 'bg-white',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-b from-mystic-900 to-night-900 text-white',
    mystic: 'bg-mystic-50',
  }

  const containers = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containers[containerSize]}`}>
        {children}
      </div>
    </section>
  )
}
