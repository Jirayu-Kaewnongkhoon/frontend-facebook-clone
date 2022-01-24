<template>
  <div class="user-profile">
    <div class="image-cover">
      <img
        class="cover"
        src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg"
      />
      <div class="image-profile">
        <img 
          class="profile"
          src="https://i.pinimg.com/550x/99/ae/e1/99aee1849c25166ba7b2f93099fa8034.jpg"  
        />
      </div>
    </div>
    <div class="username">
      <h1>{{ user.username }}</h1>
    </div>

    <div class="tab-container">
      <div class="tab">
        <p>Posts</p>
        <p>About</p>
        <p>Friends</p>
        <p>Photos</p>
        <p>Videos</p>
        <p>Check-ins</p>
        <p style="display: flex;">More<span style="font-size: 16px;" class="material-icons">arrow_drop_down</span></p>
      </div>
      <div class="tab">
        <div class="add-story"><span class="material-icons">add_circle</span><p>Add to story</p></div>
        <div><span class="material-icons">edit</span><p>Edit profile</p></div>
        <div><span class="material-icons">more_horiz</span></div>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="content-left">
      <div class="section">Intro</div>
      <div class="section">Photo</div>
      <div class="section">Friends</div>
      <div class="section">Life Event</div>
    </div>
    <div class="content-right">
      <PostForm @addPost="addPost" />
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import { useAxios } from '../guard/axiosInterceptor';

export default {
  components: { PostList, PostForm },
  props: ['id'],
  data() {
    return {
      user: {},
      posts: [],
    }
  },
  mounted() {

    this.fetchUser();
    this.fetchOwnPosts();
  
  },
  methods: {
    async fetchUser() {
      try {

        const { data } = await useAxios.post('/user/getUserByID', { id: this.id });

        if (data.data) {
          this.user = data.data
        }

      } catch (error) {
        console.log(error);
      }
    },
    async fetchOwnPosts() {

      try {

        const { data } = await useAxios.get('/post/getOwnPosts');
        
        if (data.data) {
  
          const posts = data.data;
          this.posts = [...posts];
  
        }
        
      } catch (error) {
        console.log(error);
      }
    },
    addPost(post) {
      this.posts = [post, ...this.posts];
    }
  }
};
</script>

<style scoped>
  .user-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 1px 1px 1px hsl(0, 0%, 76%);
  }
  .image-cover {
    max-height: 437px;
    overflow: hidden;
    z-index: 1;
    border-radius: 10px;
  }
  .image-cover > img.cover {
    min-width: 1100px;
  }
  .image-profile > img.profile {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 245px auto 0 auto;
    z-index: 2;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: #fff solid 3px;
  }
  .username {
    margin: 16px 0;
  }



  .tab-container {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid hsl(0, 0%, 85%);
    padding: 8px 0;
    width: 70%;
  }
  .tab p {
    padding: 16px;
    font-weight: bold;
    font-size: 14px;
  }
  .tab div {
    margin: 0 4px;
    padding: 4px;
    border: none;
    border-radius: 8px;
    background-color: hsl(0, 0%, 89%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tab .add-story {
    background-color: #1b74e4;
    color: #fff;
  }
  .add-story p {
    color: #fff;
  }
  .tab > div > p {
    padding: 0;
    margin-left: 4px;
  }
  .tab {
    display: flex;
  }
  .tab > * {
    cursor: pointer;
  }
  .tab > *:hover {
    background-color: hsl(0, 0%, 93%);
    border-radius: 8px;
  }
  .tab > .add-story:hover {
    background-color: hsl(213, 79%, 40%);
  }
  .tab > div:not(:first-child):hover {
    background-color: hsl(0, 0%, 85%);
  }



  .content {
    display: flex;
    padding: 0 240px;
    margin-top: 16px;
  }
  .content-left {
    flex: 3;
    margin: 5px;
  }
  .content-right {
    flex: 4;
    margin: 5px;
  }
  .section {
    background-color: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px hsl(0, 0%, 76%);
    font-weight: bold;
    font-size: 18px;
  }


  p {
    color: hsl(0, 0%, 30%);
  }


  @media screen and (max-width : 907px)  {
    .content { 
      flex-direction: column; 
      padding: 0 80px;
    }
  }
</style>