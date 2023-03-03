<template>
  <div>
    <div class="flex justify-center">
      <div
        class="block w-[70%] rounded-lg p-6 shadow-lg bg-slate-800"
        :class="mapper[localTask.color]"
      >
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          title: {{ localTask.title }}
        </h5>
        <BaseTextArea
          :disabled="!localTask.isActive"
          v-model="localTask.description"
          label="description"
          class="text-base text-black w-full"
        />
        <div class="flex">
          <BaseSelect
            :id="localTask.id"
            :disabled="!localTask.isActive"
            v-model="localTask.color"
            :options="colors"
            text="name"
            name-value="value"
          />
          <BaseSelect
            :id="localTask.id"
            :disabled="!localTask.isActive"
            v-model="localTask.priority"
            :options="priorities"
            text="name"
            name-value="value"
          />
        </div>
        <BaseButton v-if="localTask.isActive" @click="updateItem"> ✅ </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, unref, watch } from 'vue'
import { useStore } from 'vuex'
import BaseSelect from '@/components/DLS/BaseSelect/BaseSelect.vue'
import BaseTextArea from '@/components/DLS/BaseTextArea/BaseTextArea.vue'
import BaseButton from '@/components/DLS/BaseButton/BaseButton.vue'
import { colors, priorities } from '@/constants/index.ts'

interface IProps {
  task: {
    id: string
    title: string
    description: string
    color: string
    priority: string
    date: string
    isActive: boolean
  }
}

const store = useStore()
const props = defineProps<IProps>()
const localTask = ref({...JSON.parse(JSON.stringify(props.task))})
const mapper = {
  red: '!bg-red-500',
  green: '!bg-green-500',
  gray: '!bg-gray-500',
  blue: '!bg-blue-500'
}

const updateItem = () => {
  console.log(unref(localTask))
  localTask.value.isActive = false
  store.dispatch('tasks/updateItem', unref(localTask))
}
</script>

<style scoped>
</style>