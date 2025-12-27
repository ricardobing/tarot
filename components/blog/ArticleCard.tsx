import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'

interface ArticleCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  readingTime: string
  category: string
  thumbnail: string
}

export default function ArticleCard({
  title,
  excerpt,
  slug,
  date,
  readingTime,
  category,
  thumbnail,
}: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-mystic-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-mystic-700 transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readingTime}</span>
            </div>
          </div>

          <div className="mt-4 text-mystic-600 font-semibold group-hover:text-mystic-700">
            Leer más →
          </div>
        </div>
      </article>
    </Link>
  )
}
