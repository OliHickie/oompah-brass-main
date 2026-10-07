import { copyFileSync, writeFileSync } from 'node:fs'
import { canonicalUrl, pages } from '../src/seo.js'

const dist = new URL('../dist/', import.meta.url)
const today = new Date().toISOString().slice(0, 10)
const urls = Object.values(pages).filter((page) => page.sitemap)

const body = urls.map((page) => `  <url>
    <loc>${canonicalUrl(page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

writeFileSync(new URL('sitemap.xml', dist), xml)
copyFileSync(new URL('index.html', dist), new URL('404.html', dist))
