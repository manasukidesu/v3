import { reactive } from "vue";
export interface Book {
    title: string;
    color?: string;
}

export const books: Array<Book> = reactive([
    { title: "mana" },
    { title: "mana2" },
    { title: "mana3" },
]);
export const changeBook = (book: Book) => {
    book.title = "改变后的题目";
};
