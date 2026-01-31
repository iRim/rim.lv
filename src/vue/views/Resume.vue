<script setup>
import { header, workExpirience } from '@/config'
import Divider from '../components/Divider.vue'
import ResumeBlock from '../components/ResumeBlock.vue'
</script>

<template>
  <h1>{{ header.title }}'s Resume</h1>
  <p v-html="header.description"></p>

  <Divider>Work experience</Divider>
  <ResumeBlock v-for="(item, key) in workExpirience" :key="key" :item="item" />
</template>
