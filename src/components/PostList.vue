<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post._id">
            <Post :post="post" />
        </div>
    </div>
</template>

<script>
import Post from '../composables/Post.vue'
export default {
    props: ['posts'],
    components: {
        Post,
    },

}
</script>


<style>

</style>