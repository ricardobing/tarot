import { Instagram, Facebook, Mail, MapPin } from 'lucide-react'
import { siteConfig, whatsappUrl } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Sobre el sitio */}
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">
              Tarot Profesional
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              35 años de experiencia en lecturas de Tarot y Astrología. 
              Orientación profesional y ética desde Argentina.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-mystic-400" />
              <span>Argentina - Atención Online</span>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#que-son-lecturas" className="hover:text-gold-400 transition-colors">
                  ¿Qué son las lecturas?
                </a>
              </li>
              <li>
                <a href="#tipos-tiradas" className="hover:text-gold-400 transition-colors">
                  Tipos de tiradas
                </a>
              </li>
              <li>
                <a href="#como-es-consulta" className="hover:text-gold-400 transition-colors">
                  Cómo es una consulta
                </a>
              </li>
              <li>
                <a href="#preguntas-frecuentes" className="hover:text-gold-400 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gold-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  📱 WhatsApp: +54 9 3442 625134
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${siteConfig.social.email}`} className="hover:text-gold-400 transition-colors">
                  {siteConfig.social.email}
                </a>
              </li>
              <li>
                <strong className="text-gold-300">Horarios:</strong>
                <br />
                Lunes a Sábado
                <br />
                10:00 - 20:00 hs (ARG)
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales */}
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">
              Seguinos
            </h3>
            <div className="flex gap-4 mb-6">
              <a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mystic-700 hover:bg-mystic-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-night-700 hover:bg-night-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <a 
              href={whatsappUrl('Hola, quiero una consulta')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
            >
              Consultar ahora
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} Tarot Profesional. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>

          {/* Disclaimer legal */}
          <div className="mt-6 text-xs text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            <p>
              Las lecturas de Tarot son orientativas y tienen finalidad de guía espiritual y autoconocimiento. 
              No reemplazan asesoramiento médico, legal, financiero o psicológico profesional. 
              Los resultados dependen de tu libre albedrío y las decisiones que tomes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
