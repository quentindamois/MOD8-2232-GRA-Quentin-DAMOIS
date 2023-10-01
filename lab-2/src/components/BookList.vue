<script setup>
import { ref } from 'vue'
import BookMiniature from './BookMiniature.vue';
let id = ref(0)
const BookList = ref([
  {Id: ++id.value,Title: "Necronomicon", Author: "Lovecraft",  Page: 149},
  {Id: ++id.value, Title: "King Lear", Author: "Sheakspear", Page: 80}
])
const searchTerms = defineProps({
    terms: String,
    BookGroups: Object
})
</script>
<template>

    <h2>
        This is the booklist.
    </h2>
    <ul>
        <div v-if="searchTerms.terms == ''">
        <li  v-for="book in searchTerms.BookGroups" :key="book.Id">
            <BookMiniature :IdOfBook="book.Id">
                <template #Author>
                    {{ book.Author }}
                </template>
                <template #Title>
                    {{ book.Title }}
                </template>
                <template #Page>
                    {{ book.Page }}
                </template>
            </BookMiniature>
        <RouterView />
        </li>
    </div>
    <div v-else>
        <li  v-for="book in BookList" :key="book.Id">
            <div v-if="searchTerms.terms === book.Author || searchTerms.terms === book.Title || searchTerms.terms === book.Page">
                <BookMiniature :IdOfBook="book.Id">
                <template #Author>
                    {{ book.Author }}
                </template>
                <template #Title>
                    {{ book.Title }}
                </template>
                <template #Page>
                    {{ book.Page }}
                </template>
            </BookMiniature>
            </div>
        </li>
    </div>
    </ul>
</template>