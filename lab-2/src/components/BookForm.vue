<script setup>
import { ref } from 'vue'
const emit = defineEmits(['response'])
const BookInputed = ref({
    Title: '',
    Author: '',
    Page: Number
})
const buttonMessage = defineProps({
    labelButton: String
})
function sendInputedBook() {
    console.log("click");
    emit('response', BookInputed.value);
}
</script>
<template>
    <form method="post" onsubmit="return false">
        <label>
            Title
        </label>
        <input type="text" v-model="BookInputed.Title">
        <label>
            Author
        </label>
        <input type="text" v-model="BookInputed.Author">
        <label>
            Page count
        </label>
        <input type="number" v-model="BookInputed.Page">
        <button @click="sendInputedBook">
            {{ labelButton || 'click on the button' }}
        </button>
    </form>
</template>