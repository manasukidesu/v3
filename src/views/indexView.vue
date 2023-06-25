<template>
    <h1>HOME</h1>
    <el-button @click="handelClick">点击</el-button>
    <SvgIcon name="logo"></SvgIcon>
</template>

<script setup lang="ts">
const handelClick = () => {
    ElMessageBox.confirm(
        'proxy will permanently delete the file. Continue?',
        'Warning',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
        }
    )
        .then(() => {
            ElMessage({
                type: 'success',
                message: 'Delete completed',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled',
            })
        })
}
</script>
<style></style>
