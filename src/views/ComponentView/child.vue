<script setup lang="ts">
import { ElButton } from 'element-plus';
import { PropType } from 'vue';

interface Obj {
    mana: string,
    age: number,
    size: number
}
const props = defineProps({
    obj: Object as PropType<Obj>
})
console.log(`output->props`, props.obj?.mana)
</script>

<template>
    <div class='child' :style="{ fontSize: obj?.size + 'px' }">child</div>
    <ElButton @click="$emit('sizepuls')">字体++</ElButton>
</template>

<style lang="scss" scoped>
.child {
    width: 200px;
    height: 200px;
    border: 1px solid black;
}
</style>