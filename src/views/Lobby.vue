<template>
  <div class="page">
    <router-link to="/exhibition">Click to enter exhibition</router-link>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  a {
    font-weight: light;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--c-dark-grey);
    background-color: #fff;
    padding: 1em;
    border-radius: 50%;
    height: 6em;
    width: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
