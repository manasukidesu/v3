<script setup lang="ts">
import { ref, watch } from 'vue';
// 监听触发时机
const divEl = ref(null)
import useCallBack from './useCallBack'
let { timeTest, timeHandel } = useCallBack(divEl)

// watch监听对象
import { obj, changeObj } from './watchObject'

// 立即执行一次
import { test } from './watchImm'

// watch effect
import { num1, num2, testEffect } from './watchEffect'

const question = ref('')
const answer = ref('')

watch(question, async (nv, ov) => {
    answer.value = '思考中...'
    const res = await fetch('https://yesno.wtf/api')
    answer.value = (await res.json()).answer
})
</script>

<template>
    <div class='watch'>
        <h1>question:{{ question }}</h1>
        <input type="text" v-model="question">
        <h1>{{ answer }}</h1>
    </div>
    <!-- watch监听对象 -->
    <div>
        <template v-for="( item, key) in obj">
            {{ item }}{{ key == 'age' ? '' : '--' }}
        </template>
        <ElButton @click="changeObj">改变对象调试对象的监听</ElButton>
    </div>
    <!-- 立即执行 -->
    <div>{{ test.mana }}</div>

    <!-- watcheffect -->
    <div>{{ num1 }}</div>
    <div>{{ num2 }}</div>
    <ElButton @click="(event) => testEffect((event.target as HTMLButtonElement).innerText)">num1</ElButton>
    <ElButton @click="(event) => testEffect((event.target as HTMLButtonElement).innerText)">num2</ElButton>
    <div>------------------------------</div>
    <!-- 监听触发时机 -->
    <div ref="divEl">{{ timeTest }}</div>
    <ElButton @click="timeHandel">触发监听</ElButton>
</template>

<style lang="scss" scoped></style>./watchImm./useCallBack