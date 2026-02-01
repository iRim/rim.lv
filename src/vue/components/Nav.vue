<script setup>
import { RouterLink } from 'vue-router'
import { socials, header, contacts } from '@/config'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
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
    <RouterLink :to="{ name: 'resume' }" class="no-print">Resume</RouterLink>
    <RouterLink :to="{ name: 'cheatsheets' }" class="no-print">Cheatsheets</RouterLink>
    <RouterLink :to="{ name: 'contact' }" class="no-print">Contact</RouterLink>

    <template v-for="(social, key) in socials" :key="key">
      <a
        v-if="social.show ?? true"
        :href="social.url"
        target="_blank"
        class="icon"
        :class="key == 2 ? 'right' : ''"
        rel="noopener noreferrer"
        :aria-label="social.name"
      >
        <FontAwesomeIcon :icon="social.icon" size="lg" />
      </a>
    </template>
  </nav>
</template>
