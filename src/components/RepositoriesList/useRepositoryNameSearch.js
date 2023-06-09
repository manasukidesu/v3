import { ref, computed } from 'vue';
export default function useRepositoryNameSearch(list) {
  // 过滤
  let searchKey = ref('');
  let searchList = computed(() => {
    return list.value.filter((value) => parseInt(value) === searchKey.value);
  });
  return {
    searchKey,
    searchList,
  };
}
