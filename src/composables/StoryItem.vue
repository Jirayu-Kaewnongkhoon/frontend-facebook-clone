<template>
    <div class="story-item">
        <span class="material-icons">account_circle</span>
        <h2>Username</h2>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .story-item {
        flex: 1;
        border-radius: 20px;
        box-shadow: 1px 1px 1px hsl(0, 0%, 76%);
        background-color: aquamarine;
        padding: 10px;
        margin: 8px auto;
        max-width: 100px;
        min-height: 170px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }
    .story-item > .material-icons {
        color: hsl(0, 0%, 50%);
        font-size: 30px;
    }
    .story-item > h2 {
        font-size: 14px;
    }
</style>