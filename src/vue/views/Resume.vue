<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { header, workExpirience, languages } from '@/config'
import Divider from '../components/Divider.vue'
import ResumeBlock from '../components/ResumeBlock.vue'

function downloadPdf() {
  let filename = 'Ihor_Rusenko_Resume.pdf'
  const link = document.createElement('a')
  link.href = filename
  link.download = filename
  link.click()
}
</script>

<template>
  <div class="row">
    <h1>{{ header.title }}'s Resume</h1>
    <button class="right no-print" @click="downloadPdf">
      Download as
      <FontAwesomeIcon :icon="faFilePdf" size="lg" />
    </button>
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
        <h3>{{ language }}</h3>
        <span>{{ level }}</span>
      </div>
    </div>
  </div>
</template>
