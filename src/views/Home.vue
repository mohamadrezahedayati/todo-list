<template>
    <div>
        <BaseInput 
            label="test"
            v-model="value"
        />
    </div>
</template>

<script setup lang="ts">
import BaseInput from "../components/DLS/BaseInput/BaseInput.vue";
import { ref } from "vue";

const value = ref(null);

</script>

<style scoped>

</style>