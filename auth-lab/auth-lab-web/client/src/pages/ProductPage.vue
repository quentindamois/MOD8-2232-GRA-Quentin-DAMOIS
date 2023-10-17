<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductHeader from '../components/ProductHeader.vue'
import ProductForm from '../components/ProductForm.vue'
import AppLogo from '../components/icons/AppLogo.vue'
import EditIcon from '../components/icons/EditIcon.vue'
import useAuthenticationService from '../services/authentication-service.js'
import useProductService from '../services/product-service.js'

const route = useRoute()
const authenticationService = useAuthenticationService()
const productService = useProductService()

const id = Number.parseInt(route.params.id)
const product = ref(null)
const loading = ref(true)

const formIsEnabled = ref(false)
const productIsDeleted = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

watch(product, updateDocumentName)

onMounted(async () => {
  const response = await productService.findProduct(id)
  product.value = response.product ?? null
  loading.value = false
})

function updateDocumentName() {
  document.name = product.value ? 'Auth Lab: ' + product.value.name : 'Auth Lab'
}

function editProduct() {
  if (!canEditProduct()) {
    return
  }

  formIsEnabled.value = !formIsEnabled.value

  if (!formIsEnabled.value) {
    clearMessages()
  }
}

async function saveProduct(name, price, description) {
  if (!canEditProduct()) {
    return
  }

  clearMessages()

  price = Number.parseFloat(price)
  
  const response = await productService.updateProduct(id, name, price, description)

  if (response.success) {
    product.value.name = name.trim()
    product.value.price = Number.parseInt(price)
    product.value.description = description.trim()
    successMessage.value = response.success.message
  } else {
    errorMessage.value = response.error.message
  }
}

async function deleteProduct() {
  if (!canEditProduct()) {
    return
  }

  clearMessages()

  const response = await productService.deleteProduct(product.value.id)

  if (response.success) {
    productIsDeleted.value = true
    successMessage.value = response.success.message
  } else {
    errorMessage.value = response.error.message
  }
}

function clearMessages() {
  successMessage.value = ''
  errorMessage.value = ''
}

function canEditProduct() {
  return product.value && !productIsDeleted.value
}
</script>

<template>
  <main>
    <div v-if="loading" class="content"></div>

    <div v-else-if="product && !productIsDeleted" class="content">
      <ProductHeader :product="product" />
      <p>{{ product.description }}</p>

      <button @click="editProduct" class="edit"><EditIcon /></button>

      <ProductForm
        v-if="formIsEnabled"
        primary-button="Save"
        primary-button-class="success"
        secondary-button="Delete"
        secondary-button-class="danger"
        :product="product"
        :success-message="successMessage"
        :error-message="errorMessage"
        @primary-button-clicked="saveProduct"
        @secondary-button-clicked="deleteProduct"
      />
    </div>

    <div v-else-if="product && productIsDeleted" class="content">
      <ProductHeader :product="product" />
      <p class="success">{{ successMessage }}</p>
      <p>
        <RouterLink :to="{ name: 'home' }" class="button home">
          <AppLogo />
          <span>Home</span>
        </RouterLink>
      </p>
    </div>

    <div v-else class="content center">
      <header>
        <h1>Page not found</h1>
        <p>No product was found with id {{ route.params.id }}.</p>
      </header>
    </div>
  </main>
</template>

<style scoped>
.edit {
  padding: var(--padding-small);
  height: 38px;
  aspect-ratio: 1;
  border-radius: 2rem;
}

.edit,
form {
  margin-top: var(--margin-medium);
}

a.home {
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: var(--gap-small);
}

.center {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
