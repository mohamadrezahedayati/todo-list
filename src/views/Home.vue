<template>
  <div class="w-full bg-white relative overflow-y-auto rounded-xl">
    <TodoBoard />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TodoBoard from '../components/home/TodoBoard/TodoBoard.vue'

const value = ref(null)
</script>

<style scoped>
</style>