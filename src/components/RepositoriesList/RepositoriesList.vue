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
        <li ref="mana" v-for="item in list">{{ item }}</li>
      </template>
      <template v-else>
        <li v-for="item in searchList">{{ item }}</li>
      </template>
    </ul>
    <button @click="() => console.log($refs.mana)">点击获取ref</button>
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
  setup(_props) {
    // 将props 变为响应式
    const { user } = toRefs(_props);
    // 改变user 更新显示
    let { list, getlist } = useUserRepositories(user);
    // 搜索列表
    let { searchKey, searchList } = useRepositoryNameSearch(list);
    return {
      list,
      searchKey,
      searchList,
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
