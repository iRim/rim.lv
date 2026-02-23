<script setup>
import Divider from '../components/Divider.vue'
import ResumeBlock from '../components/ResumeBlock.vue'

import html2pdf from 'html2pdf.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { coreTechStack, workExpirience, languages } from '@/config'
import { useHeader } from '@/utils/header'

const header = useHeader()

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
      },
      enableLinks: true,
    })
    .from(resume)
    .save()
    .then(() => {
      document.body.removeChild(clone)
    })
}
</script>

<template>
  <div class="flex row">
    <h1>{{ header.title || contacts.fullname }}'s Resume</h1>
    <button class="right no-print" @click="downloadPdf">
      Download as
      <FontAwesomeIcon :icon="faFilePdf" size="lg" />
    </button>
  </div>
  <p v-html="header.description"></p>

  <Divider>Core Tech Stack (Recent Years Focus)</Divider>
  <article>
    <div class="badges stack">
      <span v-for="tech in coreTechStack" :key="tech">
        {{ tech }}
      </span>
    </div>
  </article>

  <Divider>Work experience</Divider>
  <div id="experiences">
    <ResumeBlock v-for="(item, key) in workExpirience" :key="key" :item="item" />
  </div>

  <Divider>Languages</Divider>
  <div class="languages">
    <div v-for="(level, language) in languages" :key="language">
      <h4>{{ language }}</h4>
      <span>{{ level }}</span>
    </div>
  </div>
</template>
