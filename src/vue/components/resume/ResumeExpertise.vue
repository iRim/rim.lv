<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>

<template>
  <section class="resume-section resume-expertise" aria-labelledby="expertise-heading">
    <h2 id="expertise-heading">{{ title }}</h2>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>
