<template>
    <div class="sidebar">
        <div class="sidebar-menu">
            <SidebarMenu :title="username" icon="account_circle" @click="goToProfile"/>
            <SidebarMenu title="Friends" icon="people" @click="goToFriends"/>
            <SidebarMenu title="Memories" icon="history" />
            <SidebarMenu title="Groups" icon="groups" />
            <SidebarMenu title="Saved" icon="bookmark" />
            <SidebarMenu title="Marketplace" icon="storefront" />
            <SidebarMenu title="See More" icon="arrow_drop_down" />
        </div>
        <!-- <div class="space"></div> -->
    </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue'

export default {
    components: {
        SidebarMenu,
    },
    data() {
        return {
            username: 'Username',
        }
    },
    mounted() {
        
        this.fetchUsername();

    },
    methods: {
        async fetchUsername() {
            const id = JSON.parse(localStorage.getItem('user'));

            const response = await fetch('http://localhost:3000/user/getUserByID', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });

            const data = await response.json();

            if (data.data) {
                this.username = data.data.username
            }
        },
        goToProfile() {
            this.$router.push({ name: 'UserProfile' });
        },
        goToFriends() {
            this.$router.push({ name: 'Friends' });
        }
    }
}
</script>

<style>
    .sidebar {
        flex: 2;
        /* display: flex;
        flex-direction: column; */
        padding: 10px;
    }

    .sidebar > .sidebar-menu {
        flex: 2;
        display: block;
        /* flex-direction: column; */
        border-bottom: 1px solid hsl(0, 0%, 83%);
    }

    .sidebar > .space {
        flex: 1;
    }

    @media screen and (max-width : 1000px)  {
        .sidebar { display: none; }
    }
</style>