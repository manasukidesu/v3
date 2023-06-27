import { reactive } from "vue";
interface Mana {
    name: string;
    age: number;
}
export let mana: Mana = reactive({ name: "mana", age: 18 });

export let { name, age } = mana;

export const changeMana = () => {
    name = "改变名字";
    age = 20;
    console.log(`output->name`, name);
    console.log(`output->age`, age);
    console.log(`output->mana.name`, mana.name);
    console.log(`output->mana.age`, mana.age);
};
export const replaceMana = () => {
    mana = {
        name: "你好",
        age: 10,
    };
    console.log(`output->mana`, mana);
};
