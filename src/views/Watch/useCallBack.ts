import { Ref, onMounted, ref, watch } from "vue";

export default function useCallBack(divEl: Ref) {
    onMounted(() => {
        console.log(`output->Mounted执行`);
        console.log(`output->divEl.value`, (divEl.value as HTMLDivElement).innerText);
    });
    const timeTest = ref("watch更新时间测试");

    watch(
        timeTest,
        (nv, ov) => {
            console.log(`output->dom`, (divEl.value as HTMLDivElement).innerText);
        },
        {
            flush: "post",
        }
    );

    const timeHandel = () => {
        timeTest.value = "触发监听";
    };
    return {
        timeTest,
        timeHandel,
    };
}
