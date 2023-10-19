<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import BookForm from '../components/BookForm.vue'
import useAuthenticationService from '../services/authentication-service.js'
import useBookService from '../services/book-service.js'

const router = useRouter()
const authenticationService = useAuthenticationService()

const bookService = useBookService()

const errorMessage = ref('')


async function addBook(title, author, year, pageCount, description) {
  const response = await bookService.createBook(title, author, year, pageCount, description)
  console.log(response)
}
</script>

<template>
  <main>
    <div class="content">
      <BookForm
        primary-button="Add"
        primary-button-class="success"
        :error-message="errorMessage"
        @primary-button-clicked="addBook"
      />
    </div>
  </main>
</template>
