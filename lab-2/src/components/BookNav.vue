<script setup>
import { ref } from 'vue';
const emit = defineEmits(['user-input'])
const UserInput = ref('');
function sendUserInput() {
    emit('user-input',UserInput.value)
}
</script>
<template>
    <nav>
        <h2>
            Enter a book name :
        </h2>
        <input type='text' v-model="UserInput" @input="sendUserInput">
        <p>
            {{  UserInput }}
        </p>
    </nav>
</template>