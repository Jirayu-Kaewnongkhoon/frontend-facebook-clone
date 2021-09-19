<template>
  <!-- <div class="user-profile">
        <div class="user-info">
            <div class="img-cover">
                <img src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg" alt="">
            </div>
            <div class="username">
                <span class="material-icons">account_circle</span>
                <h2>Username</h2>
            </div>
        </div>
        
        <div class="profile-menu">menu</div>
        <div class="profile-content">
            <div class="content-left">left</div>
            <div class="content-right">right</div>
        </div>
    </div> -->
  <div class="user-profile">
    <div class="user-info">
      <img
        src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg"
      />
    </div>
    <div class="profile">
      <img
        src="http://malvorlagen-fensterbilder.de/bilder-bunt/Micky-Maus.jpg"
      />
      <h1>Username</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .user-profile {
        display: block;
        position: relative;
        width: 1100px;
        margin: 0 auto;
    }

    .user-info {
        display: block;
        position: relative;
        height: 437px;
        overflow: hidden;
        z-index: 1;
        border-radius: 10px;
    }
    .user-info img {
        width: 100%;
        z-index: 1;
    }

    .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border: #d0efff solid 3px;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: -190px 0 0 450px;
    z-index: 999;
    }
    .profile img {
    max-width: 100%;
    border-radius: 50%;
    margin-bottom: 16px;
    z-index: 999;
    }
    .user-profile {
    display: flex;
    flex-direction: column;
    padding: 0px 210px;
    }

    .user-info > .img-cover {
    display: block;
    position: relative;
    height: 437px;
    overflow: hidden;
    z-index: 1;
    border-radius: 10px;
    }

    .img-cover > img {
    width: 100%;
    z-index: 1;
    }

    .user-info > .username {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 200px;
    height: 200px;
    margin: -100px 0 10px 20px;
    z-index: 100;
    }

    .user-info > .username > span {
    max-width: 100%;
    z-index: 100;
    }

    /* .user-info > .username {
            position: absolute;
            top: 315px;
            left: 700px;
            display: flex;
            flex-direction: column;
            align-items: center;
        } */

    .username > .material-icons {
    border: #d0efff solid 3px;
    border-radius: 5px;
    font-size: 170px;
    background-color: aquamarine;
    }

    .profile-content {
    display: flex;
    justify-content: space-between;
    }
</style>