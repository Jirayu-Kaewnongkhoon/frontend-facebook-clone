<template>
    <div class="menu">
        <span class="material-icons">{{ icon }}</span>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    props: ['title', 'icon'],
}
</script>

<style>
    .menu {
        display: flex;
        align-items: center;
        height: 60px;
    }
    .menu:hover {
        cursor: pointer;
        background-color: hsl(0, 0%, 90%);
        border-radius: 15px;
    }
    .menu > .material-icons {
        color: hsl(0, 0%, 50%);
        width: 70px;
        text-align: center;
        font-size: 30px;
    }
    .menu > h2 {
        font-size: 16px;
    }
</style>