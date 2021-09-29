<template>
    <div class="friends">
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
    </div>
</template>

<script>
import FriendList from '../components/FriendList.vue';
import SidebarMenu from '../components/SidebarMenu.vue';

export default {
    components: { 
        FriendList, 
        SidebarMenu 
    },
    data() {
        return {
            friends: [
                // { _id: '1', username: 'test1' },
                // { _id: '11', username: 'test1' },
                // { _id: '12', username: 'test1' },
                // { _id: '31', username: 'test1' },
                // { _id: '41', username: 'test1' },
                // { _id: '15', username: 'test1' },
                // { _id: '19', username: 'test1' },
                // { _id: '71', username: 'test1' },
                // { _id: '18', username: 'test1' },
                // { _id: '199', username: 'test1' },
                // { _id: '178', username: 'test1' },
                // { _id: '164', username: 'test1' },
                // { _id: '1644', username: 'test1' },
                // { _id: '154', username: 'test1' },
                // { _id: '1966', username: 'test1' },
                // { _id: '116', username: 'test1' },
                // { _id: '1663', username: 'test1' },
                // { _id: '2346', username: 'test2' }
            ],
        }
    },
    async mounted() {
        try {
            const result = await fetch('http://localhost:3000/user/getFriends', {
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
    }
}
</script>

<style>
    /* .friends {
        margin-top: 20px;
    } */

    .friend-menu {
        padding: 75px 8px 0 8px;
        /* padding: 0 8px; */
        height: 100%;
        width: 360px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        box-shadow: 1px 1px 3px hsl(0, 0%, 76%);
    }

    .friend-menu > .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 12px;
    }
    .friend-menu > .header > h1 {
        font-size: 24px;
    }
</style>