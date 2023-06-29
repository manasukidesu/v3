import { ref, watchEffect } from "vue";
export const num1 = ref(1);
export const num2 = ref(2);
watchEffect(() => {
    num1.value;
    console.log(`output-watchEffect执行`);
    setTimeout(() => {
        // 异步中不会作为依赖自然改变也不会调用
        console.log(`output->num2.value`, num2.value);
    }, 50);
});
export const testEffect = (numtest: string) => {
    let changed = Math.random() * 100;
    if (numtest == "num1") num1.value = changed;
    else num2.value = changed;
};
