<template>
  <h4><router-link to="/">Robonomics dApp Vue.js 3.0 UI Library</router-link></h4>
  <router-view/>
</template>

<style>


#app {
  max-width: 1200px;
  margin: 6rem auto;
}

h1 {
    text-align: center;
    margin-bottom: 3rem;
  }

  p, h2, h3, h4, h5, li {
    margin-bottom: 1rem;
  }

  section {
    margin: 3rem auto;
  }
  section section {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .grid-8 {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: var(--space)
  }
</style>

<style scoped>
h4 {
  text-align: center;
}
</style>
