import { computed, reactive } from "vue";
const author = reactive({
    name: "John Doe",
    books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
});
export const bookLen = computed(() => {
    console.log(`output->计算属性执行`);
    return author.books.length ? "Yes" : "No";
});

export const methodBookLen = () => {
    console.log(`output->方法执行`);
    return author.books.length ? "Yes" : "No";
};
// 可写计算属性
export const setGetComputed = computed({
    get() {
        return author.name;
    },
    set(value) {
        console.log(`output->value`, value);
        author.name = value;
    },
});
export const setComputed = () => {
    setGetComputed.value = "mana";
};
