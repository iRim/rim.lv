<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <section class="resume-section resume-profile" aria-labelledby="profile-heading">
    <h2 id="profile-heading">{{ title }}</h2>
    <p>{{ description }}</p>
  </section>
</template>
