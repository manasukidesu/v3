<script setup>
import { toRefs } from 'vue'
const props = defineProps({ data: { type: Object, required: true } });

const obj = {
    count: 1
};
const proxy = new Proxy(obj, {
    get(target, key, receiver) {
        console.log("这里是get");
        return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
        console.log("这里是set");
        return Reflect.set(target, key, value, receiver);
    }
});

console.log(proxy)
console.log(proxy.count)
</script>

<template>
    <h1>{{ name }}</h1>
    <div class='ui-dialog'>
        <transition v-for="item in data.data" :key="item.id" :name="item.transition">
            <component :is="item.component" v-bind="item.props"
                @close="() => { item.close($event), console.log(`output->data`, data.data) }"></component>
        </transition>
    </div>
</template>
 
<style lang="scss" scoped></style>