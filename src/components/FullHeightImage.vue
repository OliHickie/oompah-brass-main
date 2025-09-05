<script setup>
import ImageOverlay from '@/components/ImageOverlay.vue'
</script>

<template>
  <div class="h-4/6 md:h-lvh fixed flex items-end w-full">
    <slot />
    <ImageOverlay />
  </div>
  <div class="h-lvh md:h-lvh -mb-[400px]" />
</template>
