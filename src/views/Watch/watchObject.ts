import { onMounted, reactive, watch } from "vue";

export const obj = reactive({
    name: "mana",
    age: 18,
});
watch(
    () => obj.name,
    (nv, ov) => {
        console.log(`output->nv`, nv);
        console.log(`output->ov`, ov);
    }
);
export const changeObj = () => {
    obj.name = "changed";
};
let obj2 = reactive({
    mana: 55,
    name: { mm: "ndnas" },
});
watch(
    () => obj2.name,
    (nv, ov) => {
        console.log(`output->nv`, nv);
        console.log(`output->ov`, ov);
    },
    { deep: true }
);
// setTimeout(() => {
//     obj2.name.mm = "55";
//     console.log(`output->执行`);
// }, 3e3);
