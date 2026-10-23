import fs from 'node:fs/promises'
import { chromium } from 'playwright'

const url = process.env.RESUME_URL || 'http://127.0.0.1:4173/'
const indexPath = 'public/index.html'

const browser = await chromium.launch({ args: ['--no-sandbox'] })
const page = await browser.newPage()

await page.goto(url, {
  waitUntil: 'networkidle',
  timeout: 60000,
})
await page.waitForSelector('.resume-page')

const appMarkup = await page.locator('#app').innerHTML()
const indexHtml = await fs.readFile(indexPath, 'utf8')
const prerenderedHtml = indexHtml.replace('<div id="app"></div>', `<div id="app">${appMarkup}</div>`)

if (prerenderedHtml === indexHtml) {
  throw new Error('Could not find the empty app mount in public/index.html')
}

await fs.writeFile(indexPath, prerenderedHtml)
await browser.close()
