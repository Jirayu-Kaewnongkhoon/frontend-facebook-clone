<template>
    <div class="contact">
        <div class="contact-header">
            <h2>Contacts</h2>
            <div class="contact-options">
                <span class="material-icons">video_call</span>
                <span class="material-icons">search</span>
                <span class="material-icons">more_horiz</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .contact {
        flex: 2;
        padding: 30px 20px;
    }

    .contact > .contact-header {
        display: flex;
        justify-content: space-between;
    }

    .contact-header > h2 {
        font-size: 16px;
    }

    .contact-options {
        display: flex;
        align-items: center;
    }

    .contact-options > .material-icons {
        font-size: 23px;
        width: 40px;
        color: hsl(0, 0%, 50%);
        text-align: center;
    }

    .contact-options > .material-icons:hover {
        cursor: pointer;
        background-color: hsl(0, 0%, 90%);
        border-radius: 70px;
    }

    @media screen and (max-width : 800px)  {
        .contact { display: none; }
    }
</style>