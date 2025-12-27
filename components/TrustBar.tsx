import { Shield, Clock, Lock, Award } from 'lucide-react'

export default function TrustBar() {
  const features = [
    {
      icon: Award,
      text: '35 años de experiencia',
    },
    {
      icon: Shield,
      text: 'Consultas online seguras',
    },
    {
      icon: Clock,
      text: 'Respuesta en 24hs',
    },
    {
      icon: Lock,
      text: 'Totalmente confidencial',
    },
  ]

  return (
    <div className="bg-gradient-to-r from-mystic-800 to-night-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left"
            >
              <feature.icon className="w-8 h-8 text-gold-400 flex-shrink-0" />
              <span className="text-white font-medium text-sm md:text-base">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
