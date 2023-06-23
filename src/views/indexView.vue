<template>
    <h1>HOME</h1>
    <el-button :icon="Search" @click="handelClick">点击</el-button>
    <SvgIcon name="logo"></SvgIcon>
</template>

<script setup lang="ts">
import router from '@/router';
import { Search } from '@element-plus/icons-vue';
const handelClick = () => {
    let routeData = router.resolve({ name: 'chapters', params: { chapters: 'About' } })
    console.log(`output->routeData`, routeData)
}
</script>
<style></style>
