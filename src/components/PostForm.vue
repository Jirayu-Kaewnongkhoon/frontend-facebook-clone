<template>
    <div class="form">
        <div class="form-input">
            <span class="material-icons">account_circle</span>
            <input type="text" placeholder="What's on your mind?" v-model="text" @keypress.enter="handleSubmit">
        </div>
        <div class="form-option">
            <div class="option">
                <span class="material-icons">videocam</span>
                <h2>Live Video</h2>
            </div>
            <div class="option">
                <span class="material-icons">photo_library</span>
                <h2>Photo/Video</h2>
            </div>
            <div class="option">
                <span class="material-icons">emoji_emotions</span>
                <h2>Feeling/Activity</h2>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';

var socket = io('localhost:3000', { transports : ['websocket'] });

export default {
    mounted() {
        // รับ post มาเพิ่มลง state
        socket.on('add-post', (data) => {
            this.$emit('add', data);
        })
    },
    data() {
        return {
            text: '',
        }
    },
    methods: {
        handleSubmit() {

            // ส่ง request ให้เก็บ post ขึ้น database
            // response ที่ได้กลับมาจะมี id, date มาด้วย
            // emit ไปให้ server
            fetch('http://localhost:3000/post/add-post', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: this.text }),
            })
            .then(response => response.json())
            .then(data => {
                const post = data.data.post;
                socket.emit('add-post', post)
                this.text = '';
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        }
    }
}
</script>

<style>
    .form {
        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 1px 1px hsl(0, 0%, 75%);
        min-height: 140px;
        padding: 0px 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .form-input {
        display: flex;
        align-items: center;
    }
    .form-input > .material-icons {
        font-size: 48px;
    }
    .form-input > input {
        width: 100%;
        padding: 15px;
        margin-left: 8px;
        border: none;
        border-radius: 30px;
        background-color: hsl(0, 0%, 95%);
    }
    .form-input > input:focus {
        outline: none;
    }

    .form-option {
        border-top: 1px solid hsl(0, 0%, 85%);
        padding-top: 8px;
        display: flex;
        justify-content: space-around;
    }

    .form-option > .option {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 6px;
    }

    .form-option > .option:hover {
        cursor: pointer;
        background-color: hsl(0, 0%, 90%);
        border-radius: 8px;
    }

    .option > h2 {
        margin-left: 8px;
        font-size: 16px;
    }
</style>