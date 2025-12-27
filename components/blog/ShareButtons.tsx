'use client'

import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { whatsappUrl } from '@/config/site'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareUrls = {
    whatsapp: whatsappUrl(`¡Mirá este artículo! ${title} - ${url}`),
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    alert('¡Enlace copiado al portapapeles!')
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-gray-600">Compartir:</span>
      
      <a
        href={shareUrls.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
        aria-label="Compartir en WhatsApp"
      >
        <Share2 className="w-4 h-4" />
      </a>

      <a
        href={shareUrls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
        aria-label="Compartir en Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>

      <a
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-colors"
        aria-label="Compartir en Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>

      <a
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors"
        aria-label="Compartir en LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      <button
        onClick={handleCopyLink}
        className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-colors"
        aria-label="Copiar enlace"
      >
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  )
}
