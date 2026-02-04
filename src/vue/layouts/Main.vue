<script setup>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="container">
    <Nav />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
