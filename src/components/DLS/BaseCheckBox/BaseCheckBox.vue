<template>
  <input
    type="checkbox"
    :id="fieldId"
    class="mr-2"
    :checked="checked"
    @input="updateInput"
  />
  <label
    :for="fieldId"
    class="flex flex-row items-center font-bold text-gray-800 cursor-pointer select-none"
  >
    {{ label }}
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface IProps {
  label: string
  fieldId: string
  checked: Boolean
}

defineProps<IProps>()

interface Emits {
  (e: 'update:checked', value: string): void
}

const emit = defineEmits<Emits>()
const updateInput = (event) => emit('update:checked', event.target.checked)
</script>

<style scoped>
</style>