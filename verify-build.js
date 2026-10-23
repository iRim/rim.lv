import fs from 'node:fs/promises'

const requiredFiles = [
  'public/index.html',
  'public/404.html',
  'public/pdf.html',
  'public/sitemap.xml',
  'public/Ihor_Rusenko_Resume.pdf',
]

for (const file of requiredFiles) {
  await fs.access(file)
}

const indexHtml = await fs.readFile('public/index.html', 'utf8')
for (const marker of ['Ihor Rusenko', 'Full-Stack Web Developer', 'Experience']) {
  if (!indexHtml.includes(marker)) {
    throw new Error(`Missing prerendered marker in public/index.html: ${marker}`)
  }
}

const pdf = await fs.readFile('public/Ihor_Rusenko_Resume.pdf')
if (!pdf.subarray(0, 5).equals(Buffer.from('%PDF-')) || pdf.length < 20000) {
  throw new Error('Generated PDF is missing or unexpectedly small')
}

console.log(`Build verification passed: PDF ${pdf.length} bytes`)
