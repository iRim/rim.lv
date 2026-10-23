<script setup>
defineProps({
  title: { type: String, required: true },
  groups: { type: Object, required: true },
})
</script>

<template>
  <section class="resume-section resume-skills" aria-labelledby="skills-heading">
    <h2 id="skills-heading">{{ title }}</h2>
    <div class="resume-skill-groups">
      <div v-for="(group, name) in groups" :key="name" class="resume-skill-group">
        <h3>{{ name }}</h3>
        <ul>
          <li v-for="skill in group" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
