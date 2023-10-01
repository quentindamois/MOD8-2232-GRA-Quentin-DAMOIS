<script setup>
import { ref, computed } from 'vue';
import BookForm from "../components/BookForm.vue";
let id = ref(0);
const BookArray = ref([
  {Id: ++id.value, Title: "Necronomicon", Author: "Lovecraft",  Page: 149},
  {Id: ++id.value, Title: "King Lear", Author: "Sheakspear", Page: 80}
])
function essaie() {
    console.log(BookArray.value)
}
</script>
<template>
    <BookForm :label-button="'Add'" @response="(bookEntered) => BookArray.push({Title: bookEntered.Title, Author: bookEntered.Author, Page: bookEntered.Author})"/>
    <button @click="essaie">
        click me
    </button>
</template>