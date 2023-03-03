<template>
    <div class="flex">
        <BaseInput
            placeholder="type something..." 
            v-model="textItem"
            class="text-black"
            type="text"
        />
        <BaseButton class="bg-red-400" @click="addItem">
            save
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import BaseInput from '@/components/DLS/BaseInput/BaseInput.vue'
import BaseButton from '@/components/DLS/BaseButton/BaseButton.vue'
import { getId } from "@/utils/index.ts";

const store = useStore();
const textItem = ref(null)

const addItem = () => {
    store.dispatch('tasks/addItem', {text: textItem.value ,id: getId() })
}

</script>

<style scoped>

</style>