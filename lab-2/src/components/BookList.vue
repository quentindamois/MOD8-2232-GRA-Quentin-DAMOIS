<script setup>
import { ref } from 'vue'
import BookMiniature from './BookMiniature.vue';
let id = ref(0)
const BookList = ref([
  {Id: ++id,Title: "Necronomicon", Author: "Lovecraft",  Page: 149},
  {Id: ++id, Title: "King Lear", Author: "Sheakspear", Page: 80}
])
const searchTerms = defineProps({
    terms: String
})
</script>
<template>

    <h2>
        This is the booklist. {{ searchTerms.terms }}
    </h2>
    <ul>
        <div v-if="searchTerms.terms == ''">
            <h1>
                There is no filter.
            </h1>
        <li  v-for="book in BookList" :key="book.Id">
            <h1>
                {{ book.Id }}
                eeeeeeeeeeeeeee
            </h1>
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
        <h1>
            Yes filter
        </h1>
        <li  v-for="book in BookList" :key="book.Id">
            <div v-if="searchTerms.terms === book.Author || searchTerms.terms === book.Title || searchTerms.terms === book.Page">
                rtghh
            </div>
        </li>
    </div>
    </ul>
</template>