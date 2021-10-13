<template>
    <div v-if="title == selectedTitle" class="tab">
        <slot></slot>
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core'

export default {
    props: ['title'],
    setup() {
        const selectedTitle = inject('selectedTitle')

        return {
            selectedTitle
        }
    }
}
</script>

<style scoped>

</style>