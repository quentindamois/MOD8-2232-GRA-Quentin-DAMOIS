<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header>
    <h1>{{ product.name }}</h1>
    <p class="subtitle">${{ product.price }}</p>
  </header>
</template>
