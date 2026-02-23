<script setup>
import { contacts } from '@/config'
import { useHeader } from '@/utils/header'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Divider from '../components/Divider.vue'

const header = useHeader()

const items = localStorage.getItem('vacancies') || []
</script>

<template>
  <div class="flex row">
    <h1>{{ header.title || contacts.fullname }}'s Vacancies</h1>
    <button class="right no-print">
      Log in using
      <FontAwesomeIcon :icon="faGoogle" size="lg" />
    </button>
  </div>
  <p v-html="header.description"></p>

  <div>
    <Divider>Actions</Divider>
    <div class="flex row-reverse space-between">
      <button class="btn" @click="() => {}">
        <FontAwesomeIcon :icon="faPlus" size="lg" />
        Add
      </button>
    </div>

    <Divider>List</Divider>
    <p v-if="!items.length">No items found.</p>
  </div>
</template>
