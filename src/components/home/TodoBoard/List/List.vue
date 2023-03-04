<template>
  <div class="w-full">
    <ListItem v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script setup lang="ts">
import ListItem from './ListItem/ListItem.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const tasks = computed(() => store.getters['tasks/getFiltredItems'])
</script>

<style scoped>
</style>