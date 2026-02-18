<script setup>
import { RouterLink } from 'vue-router'
import { socials, contacts } from '@/config'
import { useHeader } from '@/utils/header'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const header = useHeader()
</script>

<template>
  <nav role="navigation">
    <RouterLink
      :to="{ name: 'resume' }"
      class="photo"
      rel="noopener noreferrer"
      :aria-label="header.title"
      :alt="header.title"
    />
    <div class="links">
      <RouterLink :to="{ name: 'resume' }" class="no-print">Resume</RouterLink>
      <RouterLink :to="{ name: 'vacancies' }" class="no-print">Vacancies</RouterLink>

      <template v-for="(social, key) in socials" :key="key">
        <a
          :href="social.url"
          target="_blank"
          class="icon"
          :class="key > 0 ? '' : 'right'"
          rel="noopener noreferrer"
          :aria-label="social.name"
          :title="social.name"
        >
          <FontAwesomeIcon :icon="social.icon" size="lg" />
          <span>{{ social.title }}</span>
        </a>
      </template>
    </div>
  </nav>
</template>
