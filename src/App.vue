<template>
  <div class="app-container">
    <Navbar v-if="isLoggedIn" />
    <router-view class="app-content"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
  watch: {
    // ถ้า route เปลี่ยน ให้เช็คว่ามี user ไหม
    // ถ้ามีจะแสดง nav
    $route: function(to, from) {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }

    }
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
}
</script>

<style>
  * {
    margin: 0;
  }

  html, body {
    /* height: 100%; */
    background-color: hsl(0, 0%, 95%);
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* height: 100%; */
  }

  .app-container {
    /* height: 100%; */
    overflow: auto;
  }

  .app-content {
    margin-top: 60px;
  }

  h2 {
    color: hsl(0, 0%, 30%);
  }
</style>
