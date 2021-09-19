<template>
    <div class="story">
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
    </div>
</template>

<script>
import StoryItem from '../composables/StoryItem.vue'
export default {
  components: { StoryItem },

}
</script>

<style>
    .story {
        display: flex;
        justify-content: center;
    }
</style>