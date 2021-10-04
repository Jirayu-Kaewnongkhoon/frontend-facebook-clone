<template>
    <div>
        <div class="tabs">
            <div class="header">
                <h1>Friends</h1>
                <span class="material-icons">settings</span>
            </div>
            <div v-for="title in tabTitles" :key="title" @click="selectedTitle = title">
                <SidebarMenu :title="title" icon="people"/>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
import SidebarMenu from './SidebarMenu.vue'

export default {
  components: { SidebarMenu },
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map(tab => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        provide('selectedTitle', selectedTitle)

        return {
            tabTitles,
            selectedTitle
        }
    },
}
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 12px;
    }
    .header > h1 {
        font-size: 24px;
    }
    .tabs {
        padding: 75px 8px 0 8px;
        height: 100%;
        width: 360px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        box-shadow: 1px 1px 3px hsl(0, 0%, 76%);
    }
</style>