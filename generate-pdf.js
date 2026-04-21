const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch({
    args: ['--no-sandbox'],
  })

  const page = await browser.newPage()

  await page.goto('https://rim.lv', {
    waitUntil: 'networkidle',
    timeout: 60000,
  })

  await page.waitForSelector('#app')

  await page.pdf({
    path: 'gh-pages/Ihor_Rusenko_Resume.pdf',
    // format: 'A4',
    // printBackground: true,
    // margin: {
    //   top: '10mm',
    //   bottom: '10mm',
    //   left: '10mm',
    //   right: '10mm',
    // },
  })

  await browser.close()
})()
