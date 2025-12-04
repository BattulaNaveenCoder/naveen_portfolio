import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DEFAULT = {
  title: 'Naveen Portfolio',
  description: 'Portfolio of Naveen Battula — projects, skills, blogs, and contact information.',
  image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=1600&auto=format&fit=crop',
}

export function SEO({ title, description, image, canonical }) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} | ${DEFAULT.title}` : DEFAULT.title
  const metaDesc = description || DEFAULT.description
  const metaImg = image || DEFAULT.image
  const url = canonical || pathname

  useEffect(() => {
    document.title = fullTitle

    const setTag = (selector, attribute, value) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement(selector.startsWith('meta') ? 'meta' : selector.startsWith('link') ? 'link' : 'meta')
        if (selector.startsWith('meta[name="')) {
          const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1]
          if (name) el.setAttribute('name', name)
        } else if (selector.startsWith('meta[property="')) {
          const prop = selector.match(/meta\[property="([^"]+)"\]/)?.[1]
          if (prop) el.setAttribute('property', prop)
        } else if (selector.startsWith('link[rel="')) {
          const rel = selector.match(/link\[rel="([^"]+)"\]/)?.[1]
          if (rel) el.setAttribute('rel', rel)
        }
        document.head.appendChild(el)
      }
      el.setAttribute(attribute, value)
    }

    setTag('meta[name="description"]', 'content', metaDesc)
    setTag('link[rel="canonical"]', 'href', url)

    setTag('meta[property="og:type"]', 'content', 'website')
    setTag('meta[property="og:title"]', 'content', fullTitle)
    setTag('meta[property="og:description"]', 'content', metaDesc)
    setTag('meta[property="og:image"]', 'content', metaImg)
    setTag('meta[property="og:url"]', 'content', url)

    setTag('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setTag('meta[name="twitter:title"]', 'content', fullTitle)
    setTag('meta[name="twitter:description"]', 'content', metaDesc)
    setTag('meta[name="twitter:image"]', 'content', metaImg)
  }, [fullTitle, metaDesc, metaImg, url])

  return null
}
