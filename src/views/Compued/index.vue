<script setup lang="ts">
import { methodBookLen, bookLen, setGetComputed, setComputed } from './computed';
</script>

<template>
    <div class='computed'>
        <h1>计算属性</h1>
        <!-- 方法会重复执行 -->
        <div>{{ methodBookLen() }}</div>
        <div>{{ methodBookLen() }}</div>
        <!-- 计算属性不会重复执行 -->
        <div>{{ bookLen }}</div>
        <div>{{ bookLen }}</div>
        <!-- 可写计算属性 -->
        <div>{{ setGetComputed }}</div>
        <ElButton @click="setComputed">设置计算属性</ElButton>
    </div>
</template>

<style lang="scss" scoped></style>