<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import ProductForm from '../components/ProductForm.vue'
import useAuthenticationService from '../services/authentication-service.js'
import useProductService from '../services/product-service.js'

const router = useRouter()
const authenticationService = useAuthenticationService()
const productService = useProductService()

const errorMessage = ref('')

async function addProduct(name, price, description) {
  price = Number.parseFloat(price)
  errorMessage.value = ''

  const response = await productService.createProduct(name, price, description)

  if (response.product) {
    router.push({ name: 'product', params: { id: response.product.id } })
  } else {
    errorMessage.value = response.error.message
  }
}
</script>

<template>
  <main>
    <div class="content">
      <ProductForm
        primary-button="Add"
        primary-button-class="success"
        :error-message="errorMessage"
        @primary-button-clicked="addProduct"
      />
    </div>
  </main>
</template>
