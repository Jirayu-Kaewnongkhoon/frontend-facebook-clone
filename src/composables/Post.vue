<template>
    <div class="post">
        <div class="header">
            <div class="header_left">
                <span class="material-icons">account_circle</span>
                <div class="user-info">
                    <strong>
                        <span>{{ post.user.username }}</span>
                    </strong>
                    <span>{{ new Date(post.createdAt).toLocaleString() }}</span>
                </div>
            </div>
            <div class="header_right">
                <span class="material-icons">more_horiz</span>
            </div>
        </div>
        <div class="content">
            <div class="text">
                <p>{{ post.text }}</p>
            </div>
            <div class="image"></div>
        </div>
        <div class="action-info"></div>
        <div class="action">
            <div class="action-item">
                <span class="material-icons">thumb_up</span>
                <h2>Like</h2>
            </div>
            <div class="action-item">
                <span class="material-icons">chat_bubble</span>
                <h2>Comment</h2>
            </div>
            <div class="action-item">
                <span class="material-icons" style="transform: scale(-1, 1);">reply</span>
                <h2>Share</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
}
</script>

<style>
    .post {
        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 1px 1px hsl(0, 0%, 76%);
        padding: 10px 10px 4px 10px;
        margin: 10px auto;
    }

    .post > .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .header > .header_left {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .header_left > .user-info {
        margin-left: 6px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 15px;
    }

    .user-info > span {
        font-size: 12px;
        font-weight: 600;
        color: hsl(0, 0%, 40%);
    }
    
    .header_left > .material-icons {
        font-size: 48px;
    }

    .post > .content {
        padding: 8px;
    }

    .post > .action {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border-top: 1px solid hsl(0, 0%, 83%);
        padding-top: 4px;
    }

    .action > .action-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 6px;
    }

    .action > .action-item:hover {
        cursor: pointer;
        background-color: hsl(0, 0%, 90%);
        border-radius: 8px;
    }

    .action-item > h2 {
        font-size: 16px;
        margin-left: 6px;
    }
</style>