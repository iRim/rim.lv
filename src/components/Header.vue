<template>
  <header>
    <router-link :to="{ name: 'Home' }">Rim</router-link>
    <span class="material-icons-outlined"> light_mode </span>
  </header>
</template>

<style lang="scss">
header {
  display: flex;

  width: 100%;
  height: 10vh;

  align-items: center;
  justify-content: space-between;

  > * {
    font-size: 1.3rem;
  }

  > .material-icons-outlined {
    cursor: pointer;
  }
}
</style>