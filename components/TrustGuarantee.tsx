import Section from './Section'
import { Shield, Heart, Award } from 'lucide-react'

export default function TrustGuarantee() {
  return (
    <Section background="dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Garantía de Confianza y Profesionalismo
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Tu consulta es un espacio sagrado de respeto, confidencialidad y ética profesional
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
            <Shield className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Totalmente Privada
            </h3>
            <p className="text-gray-300">
              Tu consulta es completamente confidencial. Lo que compartís queda entre nosotras.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
            <Heart className="w-12 h-12 text-mystic-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Sin Juicios
            </h3>
            <p className="text-gray-300">
              Un espacio de escucha empática, respeto absoluto y acompañamiento genuino.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
            <Award className="w-12 h-12 text-night-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Enfoque Ético
            </h3>
            <p className="text-gray-300">
              35 años de trayectoria con profesionalismo, seriedad y compromiso real.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30 rounded-lg p-4">
            <p className="text-gold-300 font-semibold">✓ Pago Seguro</p>
          </div>
          <div className="bg-gradient-to-br from-mystic-500/20 to-mystic-600/20 border border-mystic-500/30 rounded-lg p-4">
            <p className="text-mystic-300 font-semibold">✓ Atención Personalizada</p>
          </div>
          <div className="bg-gradient-to-br from-night-500/20 to-night-600/20 border border-night-500/30 rounded-lg p-4">
            <p className="text-night-300 font-semibold">✓ 35 Años de Trayectoria</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
