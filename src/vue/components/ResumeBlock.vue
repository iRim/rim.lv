<script setup lang="ts">
import { WorkExperienceInterface } from '@/config/interfaces'
import { formatResumeDate } from '@/utils/date'

const props = defineProps({
  item: {
    type: Object as () => WorkExperienceInterface,
    required: true,
  },
})
</script>

<template>
  <article>
    <h4>
      {{ formatResumeDate(props.item.period.from) }} -
      {{ props.item.period.to ? formatResumeDate(props.item.period.to) : 'Present' }}
      <span>|</span>
      {{ props.item.freelance ? 'Freelance' : props.item.company }}
    </h4>
    <div>{{ props.item.description }}</div>
    <div class="badges">
      <span v-for="tech in props.item.technologies" :key="tech">
        {{ tech }}
      </span>
    </div>
  </article>
</template>
