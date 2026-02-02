<script setup>
import { useId, defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
  },
})

const uID = useId()
</script>

<template>
  <div class="input">
    <label v-if="props.label" :for="uID">
      {{ props.label }}
    </label>
    <input :type="props.type" :id="uID" :name="props.name" />
  </div>
</template>
