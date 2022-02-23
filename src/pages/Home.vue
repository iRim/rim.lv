<template>
  <section>
    <small>Hello, I'm</small>
    <h1>Ihor Rusenko</h1>
    <h3>Full-stack WEB developer</h3>

    <div>
      <span class="btn">Download CV</span>
      <router-link :to="{ name: 'About' }" class="btn">About me</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  align-items: middle;
  flex-direction: column;
  justify-content: center;

  > * {
    margin-bottom: 3rem;
  }

  > div {
    margin-top: 2rem;
    flex-direction: row;
    justify-content: center;
  }
}
</style>