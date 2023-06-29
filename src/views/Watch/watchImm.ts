import { reactive, watch } from "vue";

export const test = reactive({
    mana: "ss",
    age: 18,
});
watch(
    () => test.mana,
    (nv, ov) => {
        console.log(`output->立即执行一次`);
    },
    { immediate: true }
);
