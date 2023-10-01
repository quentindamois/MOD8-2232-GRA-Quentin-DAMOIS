<script setup>
import { ref, computed } from 'vue';
import BookForm from "../components/BookForm.vue";
let id = ref(0);
const BookArray = ref([
  {Id: ++id.value, Title: "Necronomicon", Author: "Lovecraft",  Page: 149},
  {Id: ++id.value, Title: "King Lear", Author: "Sheakspear", Page: 80}
])
</script>
<template>
    <h1>
        {{ BookArray[this.$route.params.id].Title }}
    </h1>
    <ul>
        <li>
            {{ BookArray[this.$route.params.id].Author }}
        </li>
        <li>
            {{ BookArray[this.$route.params.id].Page }}
        </li>
    </ul>
    <BookForm :label-button="'Save'" @response="(bookEntered) => {
        BookArray[this.$route.params.id].Title = bookEntered.Title;
        BookArray[this.$route.params.id].Author = bookEntered.Author;
        BookArray[this.$route.params.id].Page = bookEntered.Author
    }"/>
</template>