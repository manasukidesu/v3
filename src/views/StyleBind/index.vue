<script setup lang="ts">
import { ElButton } from 'element-plus';
import { computed, ref } from 'vue';
let isActive = ref(false)
let isActive2 = ref(true)
// 计算属性样式绑定
let classObj = computed<Record<string, boolean>>(() => {
    return {
        mana: isActive.value,
        mana2: isActive2.value
    }
})
let showClass = computed(() => {
    let str = ''
    for (const key in classObj.value) {
        const el = classObj.value[key];
        if (el) {
            str += `-${key}`
        }
    }
    return str
})
// 绑定数组
let classArr = ref(['class1', 'class2'])
let showClass2 = computed(() => {
    let str = ''
    for (const value of classArr.value) {
        str += `-${value}`
    }
    return str
})
// styleObj
let styleobj = computed(() => {
    return {
        color: 'red',
        fontSize: '28px',
        background: 'blue'
    }
})
</script>

<template>
    <div :class="classObj">showClass--{{ showClass }}</div>
    <ElButton @click="isActive = true">改变类</ElButton>
    <div :class="classArr">showClass--{{ showClass2 }}</div>
    <ElButton @click="classArr.push('class3')">改变类2</ElButton>
    <!-- style样式绑定 -->
    <div class="base" :style="styleobj">
        测试
    </div>
</template>

<style lang="scss" scoped>
.base {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    text-align: center;
    line-height: 200px;
}
</style>