<script setup lang="ts">
import { ref } from 'vue';
const a = ref('10')
const a10 = ref('100')
defineExpose({
    a, a10
})
</script>

<template>
    <div class='Child'>Child</div>
</template>

<style lang="scss" scoped></style>