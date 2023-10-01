<script setup>
import { ref, computed } from 'vue'
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
        <li  v-for="book in BookList.filter((b) => { return searchTerms.terms === b.Author || searchTerms.terms === b.Title || searchTerms.terms === b.Page})" :key="book.Id">
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
        </li>
    </div>
    </ul>
</template>