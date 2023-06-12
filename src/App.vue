<script setup>
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </header>
    <RouterView></RouterView>
    <footer>底部</footer>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 80px;
}
</style>
