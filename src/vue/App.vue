<script setup>
import MainLayout from './layouts/Main.vue'
import Resume from './views/Resume.vue'
import ResumePdf from './views/ResumePdf.vue'

const isPdfRoute = window.location.pathname === '/resume-pdf'
</script>

<template>
  <MainLayout>
    <ResumePdf v-if="isPdfRoute" />
    <Resume v-else />
  </MainLayout>
</template>
