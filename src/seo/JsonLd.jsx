export function PersonJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Naveen Battula',
    url: '/',
    jobTitle: 'Software Developer',
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  )
}

export function ProjectJsonLd({ project, url }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: url,
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  )
}
