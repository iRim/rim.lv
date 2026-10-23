import fs from 'node:fs/promises'

const sitemapPath = 'public/sitemap.xml'
const sitemap = await fs.readFile(sitemapPath, 'utf8')
const lastmod = new Date().toISOString().slice(0, 10)
const updatedSitemap = sitemap.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${lastmod}</lastmod>`)

if (updatedSitemap === sitemap) {
  throw new Error('Could not find the sitemap lastmod element')
}

await fs.writeFile(sitemapPath, updatedSitemap)
console.log(`Updated sitemap lastmod to ${lastmod}`)
