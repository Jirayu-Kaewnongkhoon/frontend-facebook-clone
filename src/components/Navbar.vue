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
                    <h2>Username</h2>
                </div>
                <span class="material-icons">apps</span>
                <span class="material-icons">chat</span>
                <span class="material-icons">notifications</span>
                <span class="material-icons" @click="showPopupMenu">arrow_drop_down</span>
            </div>
        </div>
        <div v-if="showPopup" class="popup-menu">
            <div class="menu" @click="logout">
                <span class="material-icons">apps</span>
                <h2>Logout</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPopup: false,
        }
    },
    methods: {
        goToProfile() {
            this.$router.push({ name: 'UserProfile' });
        },
        goToHome() {
            this.$router.push({ name: 'Home' });
        },
        showPopupMenu() {
            this.showPopup = !this.showPopup;
        },
        async logout() {
            try {
                const response = await fetch('http://localhost:3000/auth/logout', {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await response.json();
                if (data.isSuccess) {
                    console.log('done', data.isSuccess);
                    localStorage.removeItem('user');
                    this.$router.replace({ name: 'Login' });
                }
            } catch (error) {
                console.log(error);                
            }
        },
    }
}
</script>

<style>
    /* nav container style */
    .nav {
        padding: 0px 10px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 998;
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
    .options > .material-icons,
    .profile > .material-icons {
        color: hsl(0, 0%, 50%);
        width: 90px;
        font-size: 30px;
        text-align: center;
    }
    .nav > * > .material-icons:hover, 
    .options > .profile:hover  {
        cursor: pointer;
        background: hsl(0, 0%, 95%);
        border-radius: 10px;
    }

    /* options style */
    .options > .material-icons {
        width: 60px;
    }
    .profile > .material-icons {
        width: 40px;
    }
    .profile > h2 {
        font-size: 16px;
        padding-right: 10px;
    }

    .popup-menu {
        position: absolute;
        right: 0;
        top: 55px;
        z-index: 999;
        width: 150px;
        /* height: 200px; */
        padding: 4px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 5px 8px -9px hsl(0, 0%, 50%);
    }
    .popup-menu > .menu > h2 {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    .popup-menu > .menu:hover {
        background: hsl(0, 0%, 95%);
    }
</style>