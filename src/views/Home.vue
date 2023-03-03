<template>
  <div>
    <BaseInput label="test" v-model="value" />
    <BaseCheckBox fieldId="test" :checked="true" />
    <BaseButton class="bg-red-400">
        test btn
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../components/DLS/BaseInput/BaseInput.vue'
import BaseCheckBox from '../components/DLS/BaseCheckBox/BaseCheckBox.vue'
import BaseButton from '../components/DLS/BaseButton/BaseButton.vue'

const value = ref(null)
</script>

<style scoped>
</style>