<script setup>
import { formatDate } from '@/utils/date'

defineProps({
  title: { type: String, required: true },
  entries: { type: Array, required: true },
  freelanceLabel: { type: String, required: true },
  presentLabel: { type: String, required: true },
  defaultPosition: { type: String, required: true },
  dateFormat: { type: String, required: true },
  locale: { type: String, required: true },
})
</script>

<template>
  <section class="resume-section resume-experience-section" aria-labelledby="experience-heading">
    <h2 id="experience-heading">{{ title }}</h2>
    <div class="resume-experience">
      <article v-for="(item, key) in [...entries].reverse()" :key="key" class="resume-job">
        <header>
          <div>
            <h3>
              {{ item.position || defaultPosition }}
              <span class="resume-company"
                >— {{ item.freelance ? freelanceLabel : item.company }}</span
              >
            </h3>
          </div>
          <p class="resume-date">
            {{ formatDate(item.period.from, dateFormat, locale) }} –
            {{ item.period.to ? formatDate(item.period.to, dateFormat, locale) : presentLabel }}
          </p>
        </header>
        <div class="resume-tags">
          <span v-for="technology in item.technologies" :key="technology">{{ technology }}</span>
        </div>
        <ul class="resume-highlights">
          <li v-for="highlight in item.highlights || [item.description]" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
