import { Helmet, HelmetProvider } from 'react-helmet-async'
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

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImg} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImg} />
    </Helmet>
  )
}

export function SEOProvider({ children }) {
  return <HelmetProvider>{children}</HelmetProvider>
}
