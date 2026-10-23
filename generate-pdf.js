import { chromium } from 'playwright'

const browser = await chromium.launch({
  args: ['--no-sandbox'],
})

const page = await browser.newPage()
const url = process.env.RESUME_URL || 'http://127.0.0.1:4173/pdf.html'

await page.goto(url, {
  waitUntil: 'networkidle',
  timeout: 60000,
})

await page.emulateMedia({ media: 'print' })
await page.waitForSelector('.pdf-page')
await page.evaluate(() => {
  document.title = 'Ihor Rusenko — Full-Stack Web Developer Resume'
})
await page.pdf({
  path: 'public/Ihor_Rusenko_Resume.pdf',
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
})

await browser.close()
