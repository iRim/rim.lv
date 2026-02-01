<script setup>
import html2pdf from 'html2pdf.js'
import { header, workExpirience, languages } from '@/config'
import Divider from '../components/Divider.vue'
import ResumeBlock from '../components/ResumeBlock.vue'

function downloadPdf() {
  const el = document.querySelector('#app')
  const clone = el.cloneNode(true)
  const resume = clone.querySelector('.container')

  resume.classList.add('pdf-mode')

  clone.style.position = 'fixed'
  clone.style.left = '-9999px'
  clone.style.top = '0'

  const invisible = document.createElement('div')
  invisible.classList.add('pdf-bottom-spacer')
  resume.appendChild(invisible)

  document.body.appendChild(clone)

  html2pdf()
    .set({
      margin: 10,
      filename: 'Ihor_Rusenko_Resume.pdf',
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      },
      enableLinks: true,
    })
    .from(resume)
    .save()
    .then(() => {
      // document.body.removeChild(clone)
    })
}
</script>

<template>
  <div class="row">
    <h1>{{ header.title }}'s Resume</h1>
    <button class="right no-print" @click="downloadPdf">Download as PDF</button>
  </div>
  <p v-html="header.description"></p>

  <div>
    <Divider>Work experience</Divider>
    <div class="column-reverse">
      <ResumeBlock v-for="(item, key) in workExpirience" :key="key" :item="item" />
    </div>

    <Divider>Languages</Divider>
    <div class="languages">
      <div v-for="(level, language) in languages" :key="language">
        <h4>{{ language }}</h4>
        <span>{{ level }}</span>
      </div>
    </div>
  </div>
</template>
