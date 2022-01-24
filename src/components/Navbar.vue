<template>
    <div class="nav-container">
        <div class="nav">
            <div class="search">
                <img class="logo" @click="goToHome" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                <div class="search-input">
                    <span class="material-icons">search</span>
                    <input type="text" class="input" placeholder="Search">
                </div>
            </div>
            <div class="page-nav">
                <span class="material-icons" @click="goToHome">home</span>
                <span class="material-icons">ondemand_video</span>
                <span class="material-icons">storefront</span>
                <span class="material-icons">groups</span>
                <span class="material-icons">sports_esports</span>
            </div>
            <div class="options">
                <div class="profile" @click="goToProfile">
                    <span class="material-icons">account_circle</span>
                    <h2>{{ username }}</h2>
                </div>
                <span class="material-icons">apps</span>
                <span class="material-icons">chat</span>
                <div class="notification-icon">
                    <span class="material-icons" @click="showNotifications">notifications</span>
                    <span v-if="notifications.length !== 0" class="badge">{{ notifications.length }}</span>
                </div>
                <span class="material-icons" @click="showPopupMenu">arrow_drop_down</span>
            </div>
        </div>
        <div v-if="showPopup" class="popup">
            <div class="popup-list" @click="logout">
                <span class="material-icons">logout</span>
                <h2>Logout</h2>
            </div>
        </div>
        <div v-if="showNotification" class="popup">
            <div v-for="notification in notifications" :key="notification._id" class="notificaion" @click="goToFriendList">
                <span class="material-icons">account_circle</span>
                <div>
                    <h2>{{ notification.username }} <span style="font-size: 13px; font-weight: normal;">{{ notification.text }}</span></h2>
                    <p style="font-size: 11px;color: gray;">1 minute ago</p>
                </div>
            </div>
            <div v-if="notifications.length == 0" style="text-align: center; font-size: 13px; margin: 13px 0;">
                <h2>There are no notificaions...</h2>
            </div>
        </div>
    </div>
</template>

<script>
import { useAxios } from '../guard/axiosInterceptor';

export default {
    mounted() {
        
        this.fetchUsername();

        this.receiveFriendNotificationSocket();
    },
    data() {
        return {
            showPopup: false,
            showNotification: false,
            username: 'Username',
            notifications: [],
        }
    },
    methods: {
        async fetchUsername() {
            const id = JSON.parse(localStorage.getItem('user'));

            try {
                
                const { data } = await useAxios.post('/user/getUserByID', { id });
    
                if (data.data) {
                    this.username = data.data.username
                }

            } catch(error) {
                console.log(error);
            }
        },
        goToProfile() {
            const id = JSON.parse(localStorage.getItem('user'));
            this.$router.push({ name: 'UserProfile', params: { id } });
        },
        goToHome() {
            this.$router.push({ name: 'Home' });
        },
        goToFriendList() {
            this.$router.push({ name: 'Friends' });
        },
        showNotifications() {
            this.showNotification = !this.showNotification;
            this.showPopup = false;
        },
        showPopupMenu() {
            this.showPopup = !this.showPopup;
            this.showNotification = false;
        },
        receiveFriendNotificationSocket() {

            // รอรับ socket event เมื่อมีการ add friend
            // จากนั้นจะสร้าง notification ขึ้นมา
            this.$root.socket.on('addFriend', (user) => {
                const friendNotification = {
                    ...user,
                    action: 'addFriend',
                    text: 'send you a friend request',
                };

                this.notifications = [friendNotification, ...this.notifications];
            })

            // รอรับ socket event เมื่อมีการ accept friend request
            // จากนั้นจะสร้าง notification ขึ้นมา
            this.$root.socket.on('acceptRequest', (user) => {
                this.$emit('joinRoom');

                const friendNotification = {
                    ...user,
                    action: 'acceptRequest',
                    text: 'accepted your friend request'
                };
                
                this.notifications = [friendNotification, ...this.notifications];
            })
        },
        async logout() {
            try {
                const { data } = await useAxios.get('/auth/logout');
                
                if (data.isSuccess) {
                    localStorage.removeItem('user');
                    this.$router.replace({ name: 'Login' });
                    this.$root.socket.emit('logout');
                }

            } catch (error) {
                console.log(error);                
            }
        },
    }
}
</script>

<style>
    .nav-container {
        position: fixed;
        top: 0;
        z-index: 998;
        width: 100%;
    }
    /* nav container style */
    .nav {
        padding: 0px 10px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        background-color: white;
        box-shadow: 0px 5px 8px -9px hsl(0, 0%, 50%);
    }

    /* search style */
    .nav > .search {
        padding: 10px;
        display: flex;
        justify-content: space-around;
    }
    .search > .logo {
        width: 40px;
    }
    .search > .logo:hover {
        cursor: pointer;
    }
    .search > .search-input {
        margin-left: 10px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(0, 0%, 93%);
        border-radius: 30px;
    }
    .search-input > .material-icons {
        color: hsl(0, 0%, 50%);
        cursor: default !important;
        background: transparent !important;
        font-size: 20px !important;
        width: 30px;
    }
    .search-input > .input {
        border: none;
        background-color: transparent;
    }
    .search-input > .input:focus {
        outline: none;
    }

    /* page nav style */
    .nav > .page-nav, 
    .nav > .options, 
    .options > .profile {
        display: flex;
        align-items: center;
    }
    .page-nav > .material-icons,
    .options .material-icons,
    .profile > .material-icons {
        color: hsl(0, 0%, 50%);
        width: 90px;
        font-size: 30px;
        text-align: center;
    }
    .nav > * .material-icons:hover, 
    .options > .profile:hover  {
        cursor: pointer;
        background: hsl(0, 0%, 95%);
        border-radius: 10px;
    }

    /* options style */
    .options .material-icons {
        width: 60px;
    }
    .profile > .material-icons {
        width: 40px;
    }
    .profile > h2 {
        font-size: 16px;
        padding-right: 10px;
    }

    .popup {
        position: absolute;
        right: 0;
        top: 55px;
        z-index: 999;
        width: 330px;
        height: 50px;
        padding: 4px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 5px 8px -9px hsl(0, 0%, 50%);
    }
    .popup > .popup-list {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    .popup > .popup-list:hover,
    .popup > .notificaion:hover {
        cursor: pointer;
        background: hsl(0, 0%, 95%);
        border-radius: 10px;
    }
    .popup > .popup-list > h2,
    .popup > .notificaion h2 {
        font-size: 16px;
    }
    .popup > .popup-list > .material-icons,
    .popup > .notificaion > .material-icons {
        width: 20px;
        color: hsl(0, 0%, 50%);
    }
    
    .popup > .notificaion > .material-icons {
        font-size: 50px;
        width: 50px;
        margin-right: 12px;
    }

    .popup > .notificaion {
        padding: 0 16px;
        display: flex;
        align-items: center;
    }

    .notification-icon {
        position: relative;
    }
    .notification-icon .badge {
        position: absolute;
        top: -5px;
        right: 0px;
        padding: 2px 6px;
        border-radius: 50%;
        background-color: red;
        color: white;
        font-size: 13px;
    }
</style>