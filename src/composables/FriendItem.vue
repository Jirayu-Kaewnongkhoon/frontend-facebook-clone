<template>
    <div class="friend">
        <img
            src="https://mpng.subpng.com/20190623/ich/kisspng-computer-icons-clip-art-transparency-vector-graphi-un-buon-soggiorno-fattoria-di-macia-5d0f273ab57bb8.1831790115612741707434.jpg"
            alt=""
        >
        <div class="friend-name">
            <h4>{{ friend.username }}</h4>
        </div>
        <div class="friend-button">
            <button class="top-btn" @click="topButtonFunction">{{ topButtonTitle }}</button>
            <button class="bottom-btn" @click="bottomButtonFunction">{{ bottomButtonTitle }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['friend', 'template'],
    methods: {
        topButtonFunction() {
            this.template.topButton.func(this.friend._id)
        },
        bottomButtonFunction() {
            this.template.bottomButton.func(this.friend._id)
        }
    },
    computed: {
        topButtonTitle() {
            return this.template.topButton.title
        },
        bottomButtonTitle() {
            return this.template.bottomButton.title
        },
    }
}
</script>

<style>
    .friend {
        float: left;
        width: 18%;
        margin: 1%;
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 1px 1px 6px hsl(0, 0%, 76%);
    }

    .friend > img {
        width: 100%;
    }

    .friend-name {
        padding: 10px;
    }

    .friend-button {
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    .friend-button > button {
        cursor: pointer;
        padding: 12px;
        border: none;
        border-radius: 8px;
        font-weight: bold;
    }

    button.top-btn {
        color: hsl(214, 89%, 52%);
        background-color: hsl(210, 100%, 95%);
        margin-bottom: 6px;
    }
    button.top-btn:hover {
        background-color: hsl(210, 23%, 85%);
    }
    button.bottom-btn {
        background-color: hsl(223, 15%, 91%);
    }
    button.bottom-btn:hover {
        background-color: hsl(0, 0%, 85%);
    }
</style>