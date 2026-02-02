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
    <div class="links">
      <!-- <RouterLink :to="{ name: 'resume' }" class="no-print">Resume</RouterLink>
      <RouterLink :to="{ name: 'cheatsheets' }" class="no-print">Cheatsheets</RouterLink> -->

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
