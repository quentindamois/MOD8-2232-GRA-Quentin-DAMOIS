<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import WelcomeMessage from '../components/WelcomeMessage.vue'
import ProductItem from '../components/ProductItem.vue'
import useProductService from '../services/product-service.js'

const route = useRoute()
const productService = useProductService()

const search = computed(() => route.query.search?.trim() ?? '')

const loading = ref(false)
const products = ref([])
const errorMessage = ref('')

onMounted(findProducts)
watch(search, findProducts)

async function findProducts() {
  if (!search.value) {
    products.value = []
    errorMessage.value = ''
    return
  }

  loading.value = true

  const response = await productService.findProducts({ search: search.value })

  if (response?.products) {
    products.value = response.products
    errorMessage.value = ''
  } else {
    products.value = []
    errorMessage.value = response?.error?.message ?? 'Something went wrong.'
  }

  loading.value = false
}
</script>

<template>
  <main v-if="!search">
    <div class="content">
      <WelcomeMessage />
    </div>
  </main>

  <main v-else id="main-list">
    <div class="content search-results">
      <ul v-if="products.length > 0">
        <li v-for="product in products" :key="product.id">
          <ProductItem :product="product" />
        </li>
      </ul>

      <ul v-else>
        <li>No products were found matching "{{ search }}".</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
#main-list {
  padding: 0;
}

.search-results {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

ul {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  list-style-type: none;
  padding-inline-start: 0;
}

li {
  padding: var(--padding-medium) var(--padding-large);
}

li:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  #main-list {
    padding: 0 var(--padding-large);
  }

  ul {
    width: inherit;
    min-width: 512px;
  }

  li {
    padding-left: inherit;
    padding-right: inherit;
  }
}
</style>
