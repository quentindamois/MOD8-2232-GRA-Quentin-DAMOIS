<script setup>
import { ref } from 'vue'

const props = defineProps({
  primaryButton: {
    type: String,
    required: true
  },
  primaryButtonClass: {
    type: String,
    default: 'primary'
  },
  secondaryButton: {
    type: String,
    default: ''
  },
  secondaryButtonClass: {
    type: String,
    default: 'secondary'
  },
  product: Object,
  successMessage: String,
  errorMessage: String
})

const name = ref(props.product?.name ?? '')
const price = ref(props.product?.price ?? '')
const description = ref(props.product?.description ?? '')

const emit = defineEmits(['primaryButtonClicked', 'secondaryButtonClicked'])

function primaryButtonClicked() {
  emit('primaryButtonClicked', name.value, price.value, description.value)
}

function secondaryButtonClicked() {
  emit('secondaryButtonClicked', name.value, price.value, description.value)
}
</script>

<template>
  <form @submit.prevent="primaryButtonClicked">
    <input type="text" v-model="name" placeholder="Name" required />
    <input type="text" v-model="price" placeholder="Price" required />
    <textarea v-model="description" placeholder="Description" required />

    <div v-if="successMessage" class="success">{{ successMessage }}</div>
    <div v-if="errorMessage" class="danger">{{ errorMessage }}</div>

    <button :class="primaryButtonClass">{{ primaryButton }}</button>
    <input type="button" v-if="secondaryButton" @click="secondaryButtonClicked" :class="secondaryButtonClass" :value="secondaryButton" />
  </form>
</template>
