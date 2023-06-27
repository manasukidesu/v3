<template>
    <h1>HOME</h1>
    <ElButton @click="toPages">reative&ref</ElButton>
    <ElButton @click="toPages">computed</ElButton>
</template>

<script setup lang="ts">
import router from '@/router';

const toPages = (event: Event) => {
    let tar: string = (event.currentTarget as HTMLButtonElement).innerText;
    router.push(tar)
}
</script>
<style></style>
