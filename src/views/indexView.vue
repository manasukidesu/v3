<template>
    <h1>HOME</h1>
    <el-button @click="toPages">reative&ref</el-button>
</template>

<script setup lang="ts">
import router from '@/router';

const toPages = (event: Event) => {
    let tar: string = (event.currentTarget as HTMLButtonElement).innerText;
    router.push(tar)
}
</script>
<style></style>
