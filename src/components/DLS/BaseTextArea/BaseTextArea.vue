<template>
  <div>
    <label v-if="label" :for="id" class="font-bold block text-white"> {{ label }} </label>
    <textarea v-bind="$attrs" :value="modelValue" @input="onInput" class="text-black" />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string
  label?: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

withDefaults(defineProps<IProps>(), { modelValue: '' })
const emit = defineEmits<Emits>()

const onInput = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
</style>