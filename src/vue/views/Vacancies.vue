<script setup>
import { contacts } from '@/config'
import { useHeader } from '@/utils/header'
const header = useHeader()
</script>

<template>
  <div class="row">
    <h1>{{ header.title || contacts.fullname }}'s Vacancies</h1>
    <button class="right no-print" @click="downloadPdf">Download as</button>
  </div>
  <p v-html="header.description"></p>
</template>
