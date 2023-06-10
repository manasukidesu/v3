<template>
    <div class="child">
        <ul @click="$emit('click')">
            <input
                placeholder="请输入搜索关键字"
                v-model="searchKey"
                class="search-input"
                type="number"
            />
            <template v-if="!searchKey">
                <li :ref="mana1" v-for="item in list">{{ item }}</li>
            </template>
            <template v-else>
                <li :ref="mana2" v-for="item in searchList">{{ item }}</li>
            </template>
        </ul>
        <h1>{{ mana1List.toString() }}</h1>
        <button @click="$emit('update:name', '你好' + Math.random())">子组件点击改变name</button>
    </div>
</template>

<script>
import { onMounted, toRefs } from 'vue';
import useUserRepositories from './useUserRepositories';

import useRepositoryNameSearch from './useRepositoryNameSearch.js';
export default {
    data() {
        return {};
    },
    emits: ['click', 'update:name'],
    props: {
        user: {
            type: String,
            require: true,
        },
        name: {
            type: String,
        },
    },
    setup(_props, { emit }) {
        console.log(`output->emits`, emit);
        // 将props 变为响应式
        const { user } = toRefs(_props);
        // 改变user 更新显示
        let { list, getlist } = useUserRepositories(user);
        // 搜索列表
        let { searchKey, searchList } = useRepositoryNameSearch(list);
        // $refs 测试
        let mana2List = [];
        let mana2 = (el) => {
            mana2List.push(el);
        };
        // $refs mana1测试
        let mana1List = [];
        let mana1 = (el) => mana1List.push(el);
        return {
            list,
            searchKey,
            searchList,
            mana2List,
            mana2,
            mana1,
            mana1List,
        };
    },
};
</script>

<style lang="scss" scoped>
.child {
    border: 1px solid black;
}

.search-input {
    border: 1px solid blue;
}
</style>
