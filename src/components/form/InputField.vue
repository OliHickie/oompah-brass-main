<script setup>
import { ref, watch } from 'vue'

const inputValue = ref('')

const emit = defineEmits(['update:modelValue'])

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)
});
</script>

<template>
  <input class="h-8 rounded px-4 text-black font-semibold" v-model="inputValue" />
</template>
