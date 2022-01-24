<template>
    <!-- <div class="friends">
        <div class="friend-menu">
            <div class="header">
                <h1>Friends</h1>
                <span class="material-icons">settings</span>
            </div>
            <SidebarMenu title="All Friends" icon="people"/>
            <SidebarMenu title="Friend Requests" icon="people"/>
            <SidebarMenu title="Sugestions" icon="people"/>
            <SidebarMenu title="Birthdays" icon="people"/>
            <SidebarMenu title="Custom Lists" icon="people"/>
        </div>
        <FriendList :friends="friends" />
    </div> -->
    
    <!-- TODO: สร้าง page สำหรับแต่ละ friendlist เพื่อใช้จัดการ event คนละตัว?? -->
    <Tabs>
        <Tab title="All Friends">
            <!-- <AllFriends /> -->
            <FriendList action="getFriends" />
        </Tab>
        <Tab title="Friend Requests">
            <!-- <FriendRequests /> -->
            <FriendList action="getFriendRequests"/>
        </Tab>
        <Tab title="Suggestions">
            <!-- <Suggestions /> -->
            <FriendList action="getSuggestionFriends"/>
        </Tab>
        <Tab title="Birthdays">
            <div class="mock">Birthdays</div>
        </Tab>
        <Tab title="Custom Lists">
            <div class="mock">Custom Lists</div>
        </Tab>
    </Tabs>
</template>

<script>
import FriendList from '../components/FriendList.vue';
import SidebarMenu from '../components/SidebarMenu.vue';
import Tabs from '../components/Tabs.vue';
import Tab from '../composables/Tab.vue';

export default {
    components: { 
        FriendList, 
        SidebarMenu,
        Tabs,
        Tab,
    },
    data() {
        return {
            friends: [],
        }
    },
}
</script>

<style>
    /* .friend-menu {
        padding: 75px 8px 0 8px;
        height: 100%;
        width: 360px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        box-shadow: 1px 1px 3px hsl(0, 0%, 76%);
    } */

    /* .friend-menu > .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 12px;
    }
    .friend-menu > .header > h1 {
        font-size: 24px;
    } */

    .mock {
        margin-left: 360px;
        padding: 0 30px;
    }
</style>