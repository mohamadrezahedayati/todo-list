<template>
    <div class="flex h-[100vh] lg:h-[90vh] flex-col items-center">
        <TextBar class="sticky top-0 z-20 p-3 bg-amber-400 w-full items-stretch"/>
        <List />
    </div>
</template>

<script setup lang="ts">
import TextBar from "./TextBar/TextBar.vue";
import List from "./List/List.vue";

</script>

<style scoped>

</style>