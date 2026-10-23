<script setup>
import { i18n } from '@/config/i18n'
</script>

<template>
  <main class="resume-shell">
    <article class="resume-page not-found" aria-labelledby="not-found-heading">
      <p class="not-found__code">404</p>
      <h1 id="not-found-heading">Page not found</h1>
      <p>{{ i18n.labels.pageNotFound }}</p>
      <a class="not-found__link" href="/">{{ i18n.labels.backToHome }}</a>
    </article>
  </main>
</template>
