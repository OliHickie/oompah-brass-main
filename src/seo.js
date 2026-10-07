export const SITE = 'https://oompahbrass.com'
export const OG_IMAGE = `${SITE}/og.jpg`
export const LOGO = `${SITE}/oompah-brass-logo.png`

export const hireFaqs = [
  {
    q: 'Are you based in London and do you travel?',
    a: 'Yes. Oompah Brass is based in London and plays events across the city, as well as across the UK. Tell us the date and the venue and we will let you know if we are free. We also travel regularly across the world including hosting the Bermuda Oktoberfest since 2013.'
  },
  {
    q: 'What is an oompah band and how many players are in Oompah Brass?',
    a: 'An oompah band is a brass band built around the oom-pah rhythm, usually tuba, trumpets, trombone and horn. Oompah Brass plays that rhythm with rock and pop songs, rather than only traditional folk tunes.'
  },
  {
    q: 'Do you play Oktoberfest?',
    a: 'Yes. Oktoberfest and German-themed events are a regular part of the year, including hosting festivals, leading games and singalongs as well as playing traditional German music.'
  },
  {
    q: 'Can we hire you for a wedding or a Christmas party?',
    a: 'Yes. We play weddings, company parties and Christmas parties in London, across the UK and abroad. The Christmas set includes classics such as Fairytale of New York and All I Want for Christmas Is You.'
  },
  {
    q: 'How do we book the band?',
    a: 'Email info@oompahbrass.com, call +44 7967 604032, or use the enquiry form. Include the date, the city, the venue and the kind of event, and we will come back to you.'
  }
]

export const pages = {
  home: {
    title: "Oompah Brass | The UK's Original Rock 'n' Roll Oompah Band",
    description: "Oompah Brass is the UK's original rock 'n' roll oompah band, based in London. Hire the five-piece for Oktoberfest, weddings, festivals and parties across the UK.",
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    sitemap: true,
  },
  hire: {
    title: 'Hire an Oompah Band in London & the UK | Oompah Brass',
    description: 'Book a London oompah band for Oktoberfest, weddings, festivals and parties across the UK. Oompah Brass play rock and pop on brass. Enquire with your date.',
    path: '/hire',
    crumb: 'Hire an oompah band',
    priority: '0.9',
    changefreq: 'monthly',
    sitemap: true,
  },
  contact: {
    title: 'Book an Oompah Band | Oompah Brass, London',
    description: 'Enquire to book Oompah Brass. The London oompah band plays across the UK. Send the date, the city and a note about your event.',
    path: '/contact',
    crumb: 'Book the band',
    priority: '0.8',
    changefreq: 'monthly',
    sitemap: true,
  },
  live: {
    title: 'Live Dates | Oompah Brass, Oompah Band UK',
    description: 'Upcoming Oompah Brass shows. See where this London oompah band is playing across the UK, and enquire about a date of your own.',
    path: '/live',
    crumb: 'Live dates',
    priority: '0.8',
    changefreq: 'weekly',
    sitemap: true,
  },
  media: {
    title: 'Photos and Videos | Oompah Brass',
    description: 'Photos and videos of Oompah Brass, the UK rock \'n\' roll oompah band, live at Oktoberfest, festivals, weddings and parties.',
    path: '/media',
    crumb: 'Media',
    priority: '0.6',
    changefreq: 'monthly',
    sitemap: true,
  },
  gallery: {
    title: 'Photos | Oompah Brass Oompah Band',
    description: 'Photos of Oompah Brass live: Oktoberfest, festivals, weddings and parties. The UK rock \'n\' roll oompah band, based in London.',
    path: '/media/gallery',
    crumb: 'Photos',
    priority: '0.6',
    changefreq: 'monthly',
    sitemap: true,
  },
  videos: {
    title: 'Videos | Oompah Brass Live',
    description: 'Watch Oompah Brass live, including Oktoberfest highlights, Bohemian Rhapsody and the BBC Newsnight set. Rock and pop, played by an oompah band.',
    path: '/media/videos',
    crumb: 'Videos',
    priority: '0.6',
    changefreq: 'monthly',
    sitemap: true,
  },
  listen: {
    title: 'Listen | Oompah Brass',
    description: 'Listen to Oompah Brass recordings. Rock and pop classics arranged for oompah band, from the London five-piece.',
    path: '/media/listen',
    crumb: 'Listen',
    priority: '0.6',
    changefreq: 'monthly',
    sitemap: true,
  },
  christmas: {
    title: 'Christmas Oompah Band for Hire | Oompah Brass',
    description: 'Book Oompah Brass for a Christmas party in London or across the UK. Brass versions of Fairytale of New York, All I Want for Christmas Is You and Walking in the Air.',
    path: '/christmas',
    crumb: 'Christmas',
    priority: '0.7',
    changefreq: 'yearly',
    sitemap: true,
  },
  education: {
    title: 'Education | Oompah Brass',
    description: 'Education projects from Oompah Brass.',
    path: '/education',
    robots: 'noindex, nofollow',
    sitemap: false,
  },
  uploadimage: {
    title: 'Upload | Oompah Brass',
    description: 'Image upload for Oompah Brass.',
    path: '/uploadimage',
    robots: 'noindex, nofollow',
    sitemap: false,
  },
}

export function canonicalUrl(path = '/') {
  if (!path || path === '/') return `${SITE}/`
  const withLeading = path.startsWith('/') ? path : `/${path}`
  return `${SITE}${withLeading.replace(/\/$/, '')}/`
}

function musicGroup() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    '@id': `${SITE}/#band`,
    name: 'Oompah Brass',
    alternateName: "The UK's original rock 'n' roll oompah band",
    url: `${SITE}/`,
    logo: LOGO,
    image: OG_IMAGE,
    description: pages.home.description,
    genre: ['Oompah', 'Brass', 'Rock', 'Pop'],
    foundingDate: '2006',
    foundingLocation: {
      '@type': 'Place',
      name: 'London, United Kingdom',
    },
    location: {
      '@type': 'Place',
      name: 'London',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'London' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    email: 'info@oompahbrass.com',
    telephone: '+447967604032',
    sameAs: [
      'https://www.instagram.com/oompahbrass/',
      'https://www.tiktok.com/@oompahbrass',
      'https://www.facebook.com/oompahbrass',
      'https://www.youtube.com/user/oompahBrass',
      'https://oompahbrass.bandcamp.com/',
    ],
  }
}

function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: 'Oompah Brass',
    url: `${SITE}/`,
    description: pages.home.description,
    inLanguage: 'en-GB',
    publisher: { '@id': `${SITE}/#band` },
  }
}

function breadcrumb(page) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Oompah Brass',
        item: `${SITE}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.crumb || page.title,
        item: canonicalUrl(page.path),
      },
    ],
  }
}

function hireService() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Oompah band hire',
    serviceType: 'Live oompah band',
    url: canonicalUrl('/hire'),
    provider: { '@id': `${SITE}/#band` },
    areaServed: [
      { '@type': 'City', name: 'London' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    description: pages.hire.description,
  }
}

function faqPage() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hireFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function jsonLdFor(name) {
  const page = pages[name]
  if (!page?.sitemap) return []

  const blocks = [musicGroup()]
  if (name === 'home') blocks.push(website())
  if (page.path !== '/') blocks.push(breadcrumb(page))
  if (name === 'hire') {
    blocks.push(hireService())
    blocks.push(faqPage())
  }
  return blocks
}
