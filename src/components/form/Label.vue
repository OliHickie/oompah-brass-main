<script setup>

defineProps({
  required: Boolean
})

</script>

<template>
  <label class="mb-1" >
    <slot />
    <span v-if="required">*</span>
  </label>
</template>
