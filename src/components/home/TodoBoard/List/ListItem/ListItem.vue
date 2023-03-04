<template>
  <div class="flex justify-center pb-4 w-full">
    <div
      class="block w-[90%] lg:w-[70%] rounded-lg p-6 shadow-lg bg-slate-800"
      :class="mapper[localTask.color]"
    >
      <h5 class="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 mb-2">
        title: {{ localTask.title }}
      </h5>
      <BaseTextArea
        :id="localTask.id"
        :disabled="!localTask.isActive"
        v-model="localTask.description"
        label="description"
        class="text-base text-black w-full"
      />
      <div class="flex justify-center items-center mt-2">
        <BaseSelect
          :id="localTask.id"
          :disabled="!localTask.isActive"
          v-model="localTask.color"
          :options="colors"
          text="name"
          name-value="value"
          class="mr-2"
          defaultText="color"
        />
        <Datepicker v-model="localTask.date" :disabled="!localTask.isActive" />
        <BaseSelect
          :id="localTask.id"
          :disabled="!localTask.isActive"
          v-model="localTask.priority"
          :options="priorities"
          text="name"
          name-value="value"
          class="ml-2"
          defaultText="priority"
        />
      </div>
      <div class="mt-2">
        <BaseButton v-if="localTask.isActive" @click="updateItem" class="mr-2 p-1"> ✅ </BaseButton>
        <BaseButton v-if="!localTask.isActive" @click="updateItem" class="mr-2 p-1"> 🖊 </BaseButton>
        <BaseButton v-if="localTask.isActive" @click="removeItem" class="mr-2 p-1"> ❌ </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { useStore } from 'vuex'
import Datepicker from '@vuepic/vue-datepicker'
import BaseSelect from '@/components/DLS/BaseSelect/BaseSelect.vue'
import BaseTextArea from '@/components/DLS/BaseTextArea/BaseTextArea.vue'
import BaseButton from '@/components/DLS/BaseButton/BaseButton.vue'
import { colors, priorities } from '@/constants/index.ts'
import '@vuepic/vue-datepicker/dist/main.css'

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
const localTask = ref({ ...JSON.parse(JSON.stringify(props.task)) })
const mapper = {
  red: '!bg-red-500',
  green: '!bg-green-500',
  gray: '!bg-gray-500',
  blue: '!bg-blue-500'
}
const updateItem = () => {
  localTask.value.isActive = !localTask.value.isActive
  store.dispatch('tasks/updateItem', unref(localTask))
}

const removeItem = () =>{
  store.dispatch('tasks/removeItem', unref(localTask))
}
</script>

<style scoped>
</style>