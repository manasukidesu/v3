<template>
    <h1>HOME</h1>
    <ElButton @click="toPages">reative&ref</ElButton>
    <ElButton @click="toPages">computed</ElButton>
    <ElButton @click="toPages">stylebind</ElButton>
    <ElButton @click="toPages">Vfor</ElButton>
    <ElButton @click="toPages">vmodel</ElButton>
    <ElButton @click="toPages">lifecycle</ElButton>
    <ElButton @click="toPages">watch</ElButton>
    <ElButton @click="toPages">modelimport</ElButton>
</template>

<script setup lang="ts">
import router from '@/router';
const toPages = (event: Event) => {
    let tar: string = (event.currentTarget as HTMLButtonElement).innerText;
    router.push(tar)
}
</script>
<style></style>
