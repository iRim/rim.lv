<script setup>
defineProps({
  title: { type: String, required: true },
  languages: { type: Object, required: true },
})
</script>

<template>
  <section class="resume-section resume-languages" aria-labelledby="languages-heading">
    <h2 id="languages-heading">{{ title }}</h2>
    <dl>
      <div v-for="(level, language) in languages" :key="language">
        <dt>{{ language }}</dt>
        <dd>{{ level }}</dd>
      </div>
    </dl>
  </section>
</template>
