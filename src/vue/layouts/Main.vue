<script setup>
import { useRoute } from 'vue-router'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div class="container">
    <Nav />
    <main :id="route.name">
      <slot />
    </main>
    <Footer />
  </div>
</template>
