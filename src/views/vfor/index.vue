<script setup lang="ts">
import { reactive } from 'vue';
const obj = reactive({
    mana1: 'manaValue1',
    mana2: 'manaValue2'
})
</script>

<template>
    <div class='vfor'>
        <div v-for="(value, key, index) in obj">
            {{ value }}-{{ key }}-{{ index }}
        </div>
    </div>
</template>

<style lang="scss" scoped></style>