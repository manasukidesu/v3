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
                <el-button @click="changeBook(book)">改变按钮</el-button>
            </li>
        </ul>
    </div>
    <!-- 解构失去响应性 -->
    <div class="decon">
        <h1>非响应式:{{ mana.name }}-{{ mana.age }}</h1>
        <el-button @click="changeMana">改变解构后的变量蒋失去响应性</el-button>
        <el-button @click="replaceMana">整体替换</el-button>
    </div>
    <!-- ref 响应式测试 -->
    <div class="ref">
        <h1>{{ qiuName }}-{{ qiuAge }}</h1>
        <el-button @click="changeQiu()">ref响应性测试</el-button>
        <div class="refObj">
            <h1>{{ qiu.name }}-{{ qiu.age }}</h1>
            <el-button @click="changeAllQiu">ref定义对象整体改变是响应式</el-button>
            <el-button @click="changeQiuName">单独改变ref对象的属性</el-button>
            <el-button @click="resetQiu">reset</el-button>
        </div>
        <div class="refObj2">
            <h1>ref定义对象2 -----{{ qiu2.name.value }}-{{ qiu2.age }}</h1>
            <el-button @click="changeAllQiu2">ref定义对象整体改变不是响应式</el-button>
            <el-button @click="changeQiu2">单独改变ref对象的属性</el-button>
            <el-button @click="resetQiu2">reset</el-button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>