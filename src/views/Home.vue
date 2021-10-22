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
      posts: [
        // { _id: '1', text: 'test', user: { username: 'test1' } },
        // { _id: '11', text: 'test', user: { username: 'test1' } },
        // { _id: '12', text: 'test', user: { username: 'test1' } },
        // { _id: '31', text: 'test', user: { username: 'test1' } },
        // { _id: '41', text: 'test', user: { username: 'test1' } },
        // { _id: '15', text: 'test', user: { username: 'test1' } },
        // { _id: '19', text: 'test', user: { username: 'test1' } },
        // { _id: '71', text: 'test', user: { username: 'test1' } },
        // { _id: '18', text: 'test', user: { username: 'test1' } },
        // { _id: '199', text: 'test', user: { username: 'test1' } },
        // { _id: '178', text: 'test', user: { username: 'test1' } },
        // { _id: '164', text: 'test', user: { username: 'test1' } },
        // { _id: '1644', text: 'test', user: { username: 'test1' } },
        // { _id: '154', text: 'test', user: { username: 'test1' } },
        // { _id: '1966', text: 'test', user: { username: 'test1' } },
        // { _id: '116', text: 'test', user: { username: 'test1' } },
        // { _id: '1663', text: 'test', user: { username: 'test1' } },
        // { _id: '2346', text: 'test', user: { username: 'test2' } }
      ],
    }
  },
  methods: {
    async fetchPosts() {

      // ส่ง request ไปขอ posts จาก database
      // เอา response ที่ได้มา add เข้า state
      // credentials: 'include' => ให้แนบตัวตนไปด้วย (cookie)
      const response = await fetch('http://localhost:3000/post/getPosts', {
          method: 'GET',
          credentials: 'include',
      })

      const data = await response.json();
      
      if (data.error) {
        // TODO: แก้การทำงานหลังมี error

        localStorage.removeItem('user');
        this.$router.replace({ name: 'Login' });

      } 
      
      if (data.data) {

        const posts = data.data;
        this.posts = [...posts];

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