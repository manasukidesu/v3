<script setup lang="ts">
// reactive响应式测试
import { books, changeBook } from './book';

// reactive结构失去响应式测试
import { changeMana, replaceMana, mana } from './deconstruction'

// ref 响应式测试
import { qiuName, qiuAge, changeQiu, qiu, changeAllQiu, changeQiuName, resetQiu, qiu2, resetQiu2, changeQiu2, changeAllQiu2 } from './refTest'
</script>

<template>
    <!-- reactive 响应性 -->
    <div class='reactive'>
        <ul>
            <li v-for="book of books">
                {{ book.title }}
                <ElButton @click="changeBook(book)">改变按钮</ElButton>
            </li>
        </ul>
    </div>
    <!-- 解构失去响应性 -->
    <div class="decon">
        <h1>非响应式:{{ mana.name }}-{{ mana.age }}</h1>
        <ElButton @click="changeMana">改变解构后的变量蒋失去响应性</ElButton>
        <ElButton @click="replaceMana">整体替换</ElButton>
    </div>
    <!-- ref 响应式测试 -->
    <div class="ref">
        <h1>{{ qiuName }}-{{ qiuAge }}</h1>
        <ElButton @click="changeQiu()">ref响应性测试</ElButton>
        <div class="refObj">
            <h1>{{ qiu.name }}-{{ qiu.age }}</h1>
            <ElButton @click="changeAllQiu">ref定义对象整体改变是响应式</ElButton>
            <ElButton @click="changeQiuName">单独改变ref对象的属性</ElButton>
            <ElButton @click="resetQiu">reset</ElButton>
        </div>
        <div class="refObj2">
            <h1>ref定义对象2 -----{{ qiu2.name.value }}-{{ qiu2.age }}</h1>
            <ElButton @click="changeAllQiu2">ref定义对象整体改变不是响应式</ElButton>
            <ElButton @click="changeQiu2">单独改变ref对象的属性</ElButton>
            <ElButton @click="resetQiu2">reset</ElButton>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>