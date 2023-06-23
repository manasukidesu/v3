<script setup lang="ts">
import books from './book';
const changeBook = (book: any) => {

}
</script>

<template>
    <div class='reactive'>
        <ul>
            <li v-for="book of books">
                {{ book.title }}
                <el-button @click="changeBook"></el-button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>