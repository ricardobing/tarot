interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gold-500 via-mystic-400 to-night-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
