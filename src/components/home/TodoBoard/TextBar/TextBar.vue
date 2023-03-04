<template>
  <div class="flex justify-between mb-3 items-center">
    <div class="flex w-1/2">
      <BaseInput
        placeholder="add title item..."
        v-model="title"
        @keypress.enter="addItem"
        class="text-black rounded-tl-md rounded-bl-md flex"
        type="text"
      />
      <BaseButton class="bg-gray-700 p-2 rounded-tr-md rounded-br-md" @click="addItem"> add </BaseButton>
    </div>
    <div class="flex w-1/2 place-content-end ml-1">
      <BaseInput
        placeholder="search item..."
        :modelValue="search"
        @update:modelValue="searchItem($event)"
        class="flex items-stretch text-black rounded-md"
        type="text"
      />
    </div>
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
const search = ref(null)
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
  title.value = ''
}

const searchItem = (event) => {
  store.dispatch('tasks/searchItem', event)
}
</script>

<style scoped>
</style>