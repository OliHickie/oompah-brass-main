<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: String,
  disabled: Boolean,
  type: {
    type: String,
    default: 'button'
  }
})

const classes = computed(() => {
  return [
    'px-4 py-3 sm:px-8 sm:py-4 border border-pink bg-pink uppercase font-semibold',
    props.disabled ? 'opacity-70 cursor-not-allowed' : 'sm:hover:opacity-70'
  ]
})

</script>

<template>
  <span>
    <button v-if="!to" :type="type" :disabled="disabled" :class="classes">
      <slot />
    </button>
    <a v-else :class="classes" :href="to">
      <slot />
    </a>
  </span>
</template>