<template>
  <Header />

  <main>
    <Home />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";

export default {
  components: {
    Header,

    // Pages
    Home,

    
  },
};
</script>

<style lang="scss" scoped>
</style>