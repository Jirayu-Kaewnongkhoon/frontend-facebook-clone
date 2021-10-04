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
    props: ['socket', 'action'],
    components: { FriendItem },
    data() {
        return {
            friends: [],
        }
    },
    mounted() {
        this.fetchFriends();
    },
    methods: {
        async fetchFriends() {
            try {
                const result = await fetch(`http://localhost:3000/user/${this.action}`, {
                    method: 'GET',
                    credentials: 'include',
                });

                const data = await result.json();

                if (data.data) {
                    const friends = data.data;
                    this.friends = [...friends];
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>

<style>
    .friend-list {
        margin-left: 360px;
        padding: 0 30px;
    }
</style>