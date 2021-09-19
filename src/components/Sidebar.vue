<template>
    <div class="sidebar">
        <div class="sidebar-menu">
            <SidebarMenu title="Username" icon="account_circle" @click="goToProfile"/>
            <SidebarMenu title="Friends" icon="people" />
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
    methods: {
        goToProfile() {
            this.$router.push({ name: 'UserProfile' });
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