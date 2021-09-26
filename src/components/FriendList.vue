<template>
    <div class="friend-list">
        <div v-for="friend in friends" :key="friend._id">
            <FriendItem :friend="friend" />
        </div>
    </div>
</template>

<script>
import FriendItem from '../composables/FriendItem.vue'

export default {
    props: ['friends'],
    components: { FriendItem },

}
</script>

<style>
    .friend-list {
        margin-left: 360px;
        padding: 0 30px;
    }
</style>