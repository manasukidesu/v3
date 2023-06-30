<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Child from './Child.vue';
const h1s = ref([])
const child = ref<InstanceType<typeof Child> | null>(null)
onMounted(() => {
    console.log(`output->h1s`, h1s.value)
    console.log(`output->child`, child.value?.a)
})
</script>

<template>
    <div class='ModelImport'>
        <h1 v-for="(item) in 8" ref="h1s">{{ item }}</h1>
        <Child ref="child"></Child>
    </div>
</template>

<style lang="scss" scoped></style>