import { ref, onMounted, watch } from 'vue';

export default function usrUserRepositories(user) {
  let list = ref([]);
  // 模拟请求
  let getlist = () => {
    console.log(`output->user`, user.value);
    let ren = Math.random() * 10;
    setTimeout(() => {
      let arr = [1, 2, 3];
      list.value = arr.map((value) => {
        return value * ren;
      });
    }, 1e3);
  };
  // 挂载后调用
  onMounted(getlist);
  // 监听用户改变
  watch(user, getlist);
  return {
    list,
    getlist,
  };
}
