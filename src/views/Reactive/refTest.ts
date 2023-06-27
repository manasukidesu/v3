import { Ref, ref } from "vue";

export let qiuName = ref<string>("dingtingqiu");
export let qiuAge = ref<number>(23);
export const changeQiu = () => {
    qiuName.value = "changed";
    qiuAge.value = 18;
};
// ref 定义对象
interface Qiu {
    name: string;
    age: number;
}
export let qiu = ref<Qiu>({ name: "dingtingqiu", age: 23 });
export let changeAllQiu = () => {
    qiu.value = {
        name: "changeQiu",
        age: 18,
    };
};
export let changeQiuName = () => {
    qiu.value.name = "changeQiu";
};

export const resetQiu = () => {
    qiu.value = { name: "dingtingqiu", age: 23 };
};

interface Qiu2 {
    name: Ref<string>;
    age: Ref<number>;
}
export let qiu2: Qiu2 = {
    name: ref("dingtingqiu"),
    age: ref(23),
};
export const changeQiu2 = () => {
    qiu2.name.value = "changed";
    console.log(`output->qiu2.name.value `, qiu2.name);
};
export const changeAllQiu2 = () => {
    qiu2 = {
        name: ref("changed"),
        age: ref(18),
    };
};
export const resetQiu2 = () => {
    qiu2.name.value = "dingtingqiu";
    qiu2.age.value = 23;
};
