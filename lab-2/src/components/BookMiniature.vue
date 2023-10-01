<script setup>
import { ref, computed } from 'vue';
const identification = defineProps({
    IdOfBook: String
})
const linkToBookPage = computed(() => {
    return "/books/" + identification.IdOfBook
})
</script>

<template>
    <RouterLink :to="linkToBookPage">
        <h3>
            Book's title :
        </h3>
    <slot name="Title" id="title-book">
    </slot>
    <h3>
        Book's author :
    </h3>
    <slot name="Author" id="author-book">
    </slot>
    <h3>
        Book's number of page :
    </h3>
    <slot name="Page" id="page-book">
    </slot>
    </RouterLink>
</template>

<style>
* {
    color: var(--color-text);
    text-decoration: none;
}
</style>