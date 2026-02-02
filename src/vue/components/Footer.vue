<script setup>
const buildDate = __BUILD_DATE__
</script>

<template>
  <footer>&copy; {{ new Date().getFullYear() }}. Last update: {{ buildDate }}</footer>
</template>
