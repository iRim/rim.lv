import { chromium } from 'playwright'

const browser = await chromium.launch({
  args: ['--no-sandbox'],
})

const page = await browser.newPage()

await page.goto('https://rim.lv', {
  waitUntil: 'networkidle',
  timeout: 60000,
})

await page.emulateMedia({ media: 'print' })
await page.waitForSelector('#app')
await page.evaluate(() => {
  document.body.classList.add('pdf-mode')
})
await page.pdf({
  path: 'gh-pages/Ihor_Rusenko_Resume.pdf',
  format: 'A4',
  printBackground: true,
})

await browser.close()
