<template>
  <header>
    <router-link :to="{ name: 'Home' }">Rim</router-link>
    <fa-icon :icon="dark ? 'sun' : 'moon'" @click="dark = !dark" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      dark: true,
    };
  },
};
</script>

<style lang="scss">
header {
  display: flex;

  width: 100%;
  height: var(--header-height);

  align-items: center;
  justify-content: space-between;

  > * {
    font-size: 1.3rem;
  }

  > [class*="fa-"] {
    cursor: pointer;
  }
}
</style>