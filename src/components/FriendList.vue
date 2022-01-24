<template>
    <div class="friend-list">
        <div v-for="friend in friends" :key="friend._id">
            <FriendItem :friend="friend" :template="getTemplate(action)"/>
        </div>
    </div>
</template>

<script>
import FriendItem from '../composables/FriendItem.vue'
import { useAxios } from '../guard/axiosInterceptor';

export default {
    props: ['action'],
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
        getTemplate(action) {
            const templates = {
                getFriends: {
                    topButton: {
                        func: (id) => this.$router.push({ name: 'UserProfile', params: { id }}),
                        title: 'View Profile'
                    },
                    bottomButton: {
                        func: (id) => console.log('unfriend', id),
                        title: 'Unfriend'
                    },
                },
                getFriendRequests: {
                    topButton: {
                        func: (id) => this.friendAction('acceptRequest', id),
                        title: 'Accept'
                    },
                    bottomButton: {
                        func: (id) => console.log('declineRequest', id),
                        title: 'Decline'
                    },
                },
                getSuggestionFriends: {
                    topButton: {
                        func: (id) => this.friendAction('addFriend', id),
                        title: 'Add Friend'
                    },
                    bottomButton: {
                        func: () => console.log('removeFriend'),
                        title: 'Remove Friend'
                    },
                }
            }

            return templates[action]
        },
        async fetchFriends() {
            try {
                const { data } = await useAxios.get(`/user/${this.action}`);

                if (data.data) {
                    const friends = data.data;
                    this.friends = [...friends];
                }
            } catch (error) {
                console.log(error);
            }
        },
        async friendAction(action, id) {
            try {
                const { data } = await useAxios.post(`/user/${action}`, { friend: id });

                if (data.isSuccess) {
                    this.$root.socket.emit(action, id);
                    this.removeFriendFromList(id);

                    if (action === 'acceptRequest') {
                        this.$root.socket.emit('join-room');
                    }
                }

            } catch (error) {
                console.log(error);
            }
        },
        removeFriendFromList(id) {
            this.friends = this.friends.filter(friend => friend._id !== id)
        }
    }
}
</script>

<style>
    .friend-list {
        margin-left: 360px;
        padding: 0 30px;
    }
</style>