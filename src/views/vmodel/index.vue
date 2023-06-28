<script setup lang="ts">
import { ref } from 'vue';

let msg = ref('')
let msg2 = ref('')
let checked = ref([])

let radio = ref('radio1')
let xiala = ref(1)
</script>

<template>
    <div class='vmodel'>
        <h1>msg:{{ msg }}</h1>
        <input type="text" :value="msg" @input="(event) => msg = (event.target as HTMLInputElement).value">
    </div>
    <div>
        <h1>msg2:{{ msg2 }}</h1>
        <input type="text" v-model="msg2">
    </div>
    <div>{{ checked }}</div>
    <input type="checkbox" name="check" value="checkbox" id="checkedbox" v-model="checked">
    <label for="checkedbox">多选1</label>
    <input type="checkbox" name="check" value="checkbox1" id="checkedbox1" v-model="checked">
    <label for="checkedbox1">多选1</label>
    <!-- 单选 -->
    <div>单选{{ radio }}</div>
    <input type="radio" name="radio" id="radio1" value="radio1" v-model="radio">
    <label for="radio1">单选1</label>
    <input type="radio" value="radio2" v-model="radio" name="radio" id="radio2">
    <label for="radio2">单选2</label>
    <!-- 下拉框 -->
    <div>下拉框:{{ xiala }}</div>
    <select name="xiala" v-model="xiala" id="xiala">
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>
    </select>
</template>

<style lang="scss" scoped></style>