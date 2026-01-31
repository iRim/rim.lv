<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article>
    <h2>{{ props.item.position }} at {{ props.item.company }}</h2>
    <p>{{ props.item.description }}</p>
  </article>
</template>
