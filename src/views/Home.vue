<template>
  <div class="home">
    <Sidebar />
    <div class="content">
      <Story />
      <PostForm @addPost="addPost" />
      <PostList :posts="posts" />
    </div>
    <Contacts />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Contacts from '../components/Contacts.vue'
import Story from '../components/Story.vue'
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import { useAxios } from '../guard/axiosInterceptor'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Contacts,
    Story,
    PostForm,
    PostList,
  },
  mounted() {

    this.receivePostSocket();

    this.fetchPosts();

  },
  unmounted() {
    this.$root.socket?.removeAllListeners('receive-post');
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    async fetchPosts() {

      // ส่ง request ไปขอ posts จาก database
      // เอา response ที่ได้มา add เข้า state
      try {
        
        const { data } = await useAxios.get('/post/getPosts');
        
        if (data.data) {
  
          const posts = data.data;
          this.posts = [...posts];
  
        }

      } catch (error) {
        // เช็คก่อนว่ามีสถานะ login ไหม
        const isAuth = error.response.status !== 401;

        // ถ้าไม่ได้ login อยู่ แล้ว request ขอ post
        // จะให้เด้งไปหน้า login
        if (!isAuth) {
          localStorage.removeItem('user');
          this.$router.replace({ name: 'Login' });
        }
      }

    },
    receivePostSocket() {
      // รับ post มาเพิ่มลง state
      this.$root.socket.on('receive-post', (data) => {
        this.addPost(data);
      })
    },
    addPost(post) {
      this.posts = [post, ...this.posts];
    }
  }
}
</script>

<style>
  .home {
    display: flex;
  }

  .home > .content {
    flex: 4;
    padding: 10px 80px;
  }
</style>