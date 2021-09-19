<template>
  <div class="home">
    <Navbar />
    <div class="content-container">
      <Sidebar />
      <div class="content">
        <Story />
        <PostForm @add="addPost" />
        <PostList :posts="posts" />
      </div>
      <Contacts />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Contacts from '../components/Contacts.vue'
import Story from '../components/Story.vue'
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Contacts,
    Story,
    PostForm,
    PostList,
    Navbar,
  },
  async mounted() {

    // ส่ง request ไปขอ posts จาก database
    // เอา response ที่ได้มา add เข้า state
    // credentials: 'include' => ให้แนบตัวตนไปด้วย (cookie)
    const response = await fetch('http://localhost:3000/post/get-posts', {
        method: 'GET',
        credentials: 'include',
    })

    const data = await response.json();
    
    if (data.error) {

      localStorage.removeItem('user');
      this.$router.replace({ name: 'Login' });

    } else {

      const posts = data.data;
      this.posts = [...posts];

    }

  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    addPost(post) {
      this.posts = [post, ...this.posts];
    }
  }
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
  }

  .home > .content-container {
    display: flex;
  }

  .content-container > .content {
    flex: 4;
    padding: 10px 80px;
  }
</style>