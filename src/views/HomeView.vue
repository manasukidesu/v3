<script>
import RepositoriesList from '../components/RepositoriesList/RepositoriesList.vue';
export default {
    data() {
        return {
            user: 'mana',
            name: '你好',
        };
    },
    components: { RepositoriesList },
    methods: {
        changeUser() {
            this.user = 'mana-' + Math.random() * 100;
        },
        handelclick() {
            console.log(`output->点击`, '点击');
        },
    },
};
</script>

<template>
    <SvgIcon class="img" name="logo" />
    <h1>首页的name:{{ name }}</h1>
    <button @click="changeUser">点击改变用户</button>
    <RepositoriesList :user="user" v-model:name="name" @click="handelclick"></RepositoriesList>
</template>
<style lang="scss">
.img {
    width: 100px;
    height: 100px;
}
</style>
