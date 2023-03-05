<template>
  <div class="select-box" :class="disabled ? null : 'cursor-pointer'">
    <div
      class="select-box__selected-item"
      data-testId="selected-item"
      @click="disabled ? null : showOptions()"
    >
      <span> {{ getSelectedOption }} </span>
      <ArrowDown v-if="!disabled" class="arrow-icon" :class="isOpenOptions ? `rotate-180` : null" />
    </div>
    <div v-show="isOpenOptions" class="select-box__options options">
      <div v-for="option in options" :key="option.index" class="option" data-testId="option">
        <label :for="`${id}${option[nameValue]}`" @click="hideOptions()">
          <span class="pl-2">{{ option[text] }}</span>
          <input
            :id="`${id}${option[nameValue]}`"
            :value="option[nameValue]"
            type="radio"
            :checked="option[nameValue] === optionSelected"
            @input="updateValue(option[nameValue])"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps, withDefaults, defineEmits } from 'vue'
import ArrowDown from '@/assets/svg/arrow-down.vue'

interface IProps {
  id: string
  modelValue: string | number
  text: string
  nameValue: string
  options: any[]
  disabled: boolean
  defaultText: ''
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  text: 'text',
  nameValue: 'value',
  options: () => []
})
const emit = defineEmits<Emits>()

const isOpenOptions = ref(false)
const optionSelected = ref(props.modelValue)

const getSelectedOption = computed(() =>
  optionSelected.value ? optionSelected.value : props.defaultText
)

const showOptions = () => (isOpenOptions.value = true)
const hideOptions = () => (isOpenOptions.value = false)
const updateValue = (optionValue) => {
  emit('update:modelValue', optionValue)
  optionSelected.value = optionValue
}
</script>

<style lang="scss" scoped>
.select-box {
  @apply z-10 relative;
  width: 13rem;

  &__selected-item {
    @apply bg-zinc-600 text-zinc-200 border-none rounded leading-tight w-full flex items-center justify-between;
    padding: 0.6rem 1rem;
    .arrow-icon {
      @apply h-3 w-3;
      :deep(path) {
        background-color: bisque;
        stroke: white;
        stroke-width: 65px;
      }
    }
  }

  &__options {
    @apply bg-zinc-400 text-zinc-200;
    position: absolute;
    display: grid;
    left: 0;
    right: 0;
    padding: 0.625rem;
    top: 50px;

    .option {
      margin-bottom: 10px;
    }

    label {
      @apply w-full flex;
    }

    input[type='radio'] {
      visibility: hidden;
    }
  }
}
</style>
