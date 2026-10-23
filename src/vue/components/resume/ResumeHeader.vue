<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

defineProps({
  title: { type: String, required: true },
  role: { type: String, required: true },
  specialism: { type: String, required: true },
  kicker: { type: String, required: true },
  downloadLabel: { type: String, required: true },
  contactsLabel: { type: String, required: true },
  contacts: { type: Array, required: true },
  avatar: { type: String, required: true },
})

defineEmits(['download'])
</script>

<template>
  <header class="resume-header">
    <img class="resume-header__avatar" :src="avatar" :alt="title" width="132" height="132" />
    <div class="resume-header__identity">
      <p class="resume-header__kicker">{{ kicker }}</p>
      <h1>{{ title }}</h1>
      <p class="resume-header__role">{{ role }}</p>
      <p class="resume-header__specialism">{{ specialism }}</p>
      <nav class="resume-header__contacts" :aria-label="contactsLabel">
        <a
          v-for="contact in contacts"
          :key="contact.name"
          :href="contact.url"
          :target="contact.external ? '_blank' : undefined"
          :rel="contact.external ? 'noopener noreferrer' : undefined"
        >
          <FontAwesomeIcon :icon="contact.icon" aria-hidden="true" />
          <span>{{ contact.title }}</span>
        </a>
      </nav>
      <button class="resume-header__download no-print" type="button" @click="$emit('download')">
        <FontAwesomeIcon :icon="faFilePdf" aria-hidden="true" />
        {{ downloadLabel }}
      </button>
    </div>
  </header>
</template>
