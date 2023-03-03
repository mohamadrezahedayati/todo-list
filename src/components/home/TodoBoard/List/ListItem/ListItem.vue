<template>
  <div>
    {{ task }}
  </div>
</template>

<script setup lang="ts">
interface IProps {
  task: {
    id: string
    text: string
  }
}

defineProps<IProps>()
</script>

<style scoped>
</style>