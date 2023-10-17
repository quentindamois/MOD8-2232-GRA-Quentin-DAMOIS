<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'product', params: { id: product.id } }">
    <h2>{{ product.name }}</h2>
    <p class="subtitle">$ {{ product.price }}</p>
  </RouterLink>
</template>

<style scoped>
a * {
  color: inherit;
}
</style>
