<script setup>
import { computed } from 'vue'

defineProps({
  to: String
})

const classes = computed(() => {
  return 'px-4 py-3 sm:px-8 sm:py-4 border border-pink bg-pink uppercase font-semibold sm:hover:opacity-70'
})

</script>

<template>
  <span>
    <button v-if="!to" :class="`${classes}`">
      <slot />
    </button>
    <a v-else :class="`${classes}`" :href="to">
      <slot />
    </a>
  </span>
</template>