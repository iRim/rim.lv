<script setup>
defineProps({
  year: { type: Number, required: true },
  label: { type: String, required: true },
  buildDate: { type: String, required: true },
})
</script>

<template>
  <footer class="resume-footer no-print">&copy; {{ year }}. {{ label }}: {{ buildDate }}</footer>
</template>
