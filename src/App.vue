<template>
  <div class="app-container">
    <Navbar v-if="isLoggedIn" />
    <router-view class="app-content"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import io from 'socket.io-client'

export default {
  components: { Navbar },
  watch: {
    // ถ้า route เปลี่ยน ให้เช็คว่ามี user ไหม
    // ถ้ามีจะแสดง nav
    $route: function(to, from) {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user) {
        
        // user ยังมีสถานะ login อยู่ไหม
        // ถ้าไม่ => เพิ่ง online, จะ connect socket, join room
        // ถ้ามี => ก็จะไม่ connect socket, join room ซ้ำ
        if (!this.isLoggedIn) {
          this.socket = io('localhost:3000', { 
              transports : ['websocket'], 
              query: { 'userID': user } 
          });
          this.joinRoomSocket();
          this.isLoggedIn = true;
        }
        
      } else {
        this.isLoggedIn = false;
        this.socket = null;
      }

    }
  },
  data() {
    return {
      isLoggedIn: false,
      socket: null,
    }
  },
  methods: {
    joinRoomSocket() {
      this.socket.emit('join-room');
    },
  }
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
