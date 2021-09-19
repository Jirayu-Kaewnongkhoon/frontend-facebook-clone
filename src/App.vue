<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style>
  * {
    margin: 0;
  }

  html, body {
    height: 100%;
    background-color: hsl(0, 0%, 95%);
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  .app-container {
    height: 100%;
  }

  h2 {
    color: hsl(0, 0%, 30%);
  }
</style>
