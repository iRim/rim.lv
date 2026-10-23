<script setup>
import MainLayout from './layouts/Main.vue'
import NotFound from './views/NotFound.vue'
import Resume from './views/Resume.vue'

const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html'
</script>

<template>
  <MainLayout>
    <Resume v-if="isHomePage" />
    <NotFound v-else />
  </MainLayout>
</template>
