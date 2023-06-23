import { reactive } from "vue";
interface Book {
    title: string;
    color?: string;
}
let books: Array<Book> = reactive([{ title: "mana" }, { title: "mana2" }, { title: "mana3" }]);
export default books;
