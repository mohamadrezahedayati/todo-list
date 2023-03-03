<template>
  <div class="flex">
    <BaseInput placeholder="type title item..." v-model="title" class="text-black" type="text" />
    <BaseButton class="bg-red-400" @click="addItem"> add </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRaw } from 'vue'
import { useStore } from 'vuex'
import BaseInput from '@/components/DLS/BaseInput/BaseInput.vue'
import BaseButton from '@/components/DLS/BaseButton/BaseButton.vue'
import { getId } from '@/utils/index.ts'

const store = useStore()
const title = ref(null)
const initItem = computed(() => ({
  title: title.value,
  id: getId(),
  description: '',
  color: '',
  priority: '',
  date: '',
  isActive: true
}))

const addItem = () => {
  store.dispatch('tasks/addItem', JSON.parse(JSON.stringify(toRaw(initItem.value))))
}
</script>

<style scoped>
</style>