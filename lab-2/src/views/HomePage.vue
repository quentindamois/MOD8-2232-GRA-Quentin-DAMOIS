<script setup>
import { ref } from 'vue'
import BookNav from '../components/BookNav.vue';
import BookList from '../components/BookList.vue';
let id = ref(0);
const BookArray = ref([
  {Id: ++id.value, Title: "Necronomicon", Author: "Lovecraft",  Page: 149},
  {Id: ++id.value, Title: "King Lear", Author: "Sheakspear", Page: 80}
])
const termsEntered = ref("")
</script>
<template>
    <h1>
        You're on the HomePage.
    </h1>
    <BookNav @user-input="(SearchTearm) => termsEntered = SearchTearm"/>
    <BookList :terms="termsEntered" V-model:BookGroups="BookArray"/>
</template>