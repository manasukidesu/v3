<script setup lang="ts">
import { useRouter } from 'vue-router';
let router = useRouter()
const backHome = () => {
    router.push('/')
}
</script>
<template>
    <div class='backHome'>
        <ElButton @click="backHome">
            <IEpHouse></IEpHouse>
            返回首页
        </ElButton>
    </div>
</template>

<style lang="scss" scoped>
.backHome {
    position: fixed;
    top: 20px;
    right: 20px;
}
</style>