<template>
  <div>
    <label v-if="label" :for="id" class="font-bold block">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      class="border w-full p-1"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface IProps {
  id?: string
  label?: string
  modelValue: string | Number
  type: string
}

withDefaults(defineProps<IProps>(), { type: 'text'})

interface Emits {
  (e: 'update:modelValue', value: number | string): void
}

const emit = defineEmits<Emits>()

const updateInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
</style>