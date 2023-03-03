<template>
  <ListItem v-for="task in tasks" :key="task.id" :task="task" />
</template>

<script setup lang="ts">
import ListItem from './ListItem/ListItem.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const tasks = computed(() => store.state.tasks.items)
</script>

<style scoped>
</style>