<script setup lang="ts">
import { ElButton } from 'element-plus';
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated, ref } from 'vue';

onBeforeMount(() => {
    console.log('挂载前执行')
})
onMounted(() => {
    console.log('挂载之后执行')
})
onBeforeUpdate(() => {
    console.log('依赖改变导致dom更新之前调用')
})
onUpdated(() => {
    console.log('依赖改变导致dom更新之后调用')
})
onBeforeUnmount(() => {
    console.log('卸载前执行')
})
onUnmounted(() => {
    console.log('卸载后执行')
})
let count = ref(0)
</script>

<template>
    <div class='LifeCycle'>
        生命周期
    </div>
    <h1>{{ count }}</h1>
    <ElButton @click="count++">+</ElButton>
</template>

<style lang="scss" scoped></style>