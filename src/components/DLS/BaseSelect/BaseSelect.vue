<template>
  <div class="select-box">
    <div class="select-box__selected-item" @click="disabled ? null : showOptions()">
      <span> {{ getSelectedOption }} </span>
      <!-- <ArrowDown
        class="arrow-icon"
        :class="isOpenOptions ? `rotate-180` : null "
      /> -->
    </div>
    <div v-show="isOpenOptions" class="select-box__options options">
      <div v-for="option in options" :key="option.index" class="option">
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

interface IProps {
  id: string
  modelValue: string | number
  text: string
  nameValue: string
  options: any[]
  disabled: boolean
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

withDefaults(defineProps<IProps>(), {
  modelValue: '',
  text: 'text',
  nameValue: 'value',
  options: () => []
})
const emit = defineEmits<Emits>()

const isOpenOptions = ref(false)
const optionSelected = ref(null)

const getSelectedOption = computed(() =>
  optionSelected.value ? optionSelected.value : 'Filter by'
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
  position: relative;
  width: 13rem;
  cursor: pointer;

  &__selected-item {
    background-color: red;
    color: white;
    box-shadow: 1px 3px 5px silver;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .arrow-icon {
      width: 0.625rem;
      height: 0.625rem;
      path {
        background-color: darkgoldenrod;
        stroke: var(--color-text);
        stroke-width: 65px;
      }
    }
  }

  &__options {
    position: absolute;
    background-color: forestgreen;
    color: var(--color-text);
    display: grid;
    left: 0;
    right: 0;
    box-shadow: 1px 3px 5px seagreen;
    padding: 0.625rem;
    top: 50px;

    .option {
      margin-bottom: 10px;
    }

    label {
      cursor: pointer;
    }

    input[type='radio'] {
      visibility: hidden;
    }
  }
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
