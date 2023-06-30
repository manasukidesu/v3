<script setup lang="ts">
import { reactive } from 'vue';
import Child from './child.vue';

const obj = reactive({
    mana: 'mana名称',
    age: 18,
    size: 20
})
</script>

<template>
    <div class="father">
        <div class='component'>father</div>
        <Child :obj=obj @sizepuls=obj.size++></Child>
    </div>
</template>

<style lang="scss" scoped>
.father {
    box-sizing: border-box;
    padding: 50px;
    border: 1px solid blue;

    .component {
        text-align: center;
        font-size: 28px;
    }
}
</style>