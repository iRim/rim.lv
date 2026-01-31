<script setup>
import { RouterLink } from 'vue-router'
import { socials, header } from '@/config'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <nav role="navigation">
    <RouterLink :to="{ name: 'resume' }" class="logo">
      <img
        src="@img/logo.png"
        rel="noopener noreferrer"
        :aria-label="header.title"
        :alt="header.title"
      />
    </RouterLink>
    <RouterLink :to="{ name: 'resume' }">Resume</RouterLink>
    <RouterLink :to="{ name: 'cheatsheets' }">Cheatsheets</RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>

    <a
      v-for="(social, key) in socials"
      :href="social.url"
      :key="key"
      target="_blank"
      class="icon"
      :class="key > 0 ? '' : 'right'"
      rel="noopener noreferrer"
      :aria-label="social.name"
    >
      <FontAwesomeIcon :icon="social.icon" size="lg" />
    </a>
  </nav>
</template>
