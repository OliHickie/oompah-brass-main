<script setup>
import Button from '@/components/PrimaryBtn.vue'
</script>

<template>
<div class="lg:flex lg:h-[60vh] xl:h-[75vh] overflow-hidden relative">
  <div class="lg:hidden opacity-100">
    <slot />
  </div>
  <!-- Left Section -->
  <div class="relative flex flex-col justify-center text-white px-8 py-4 lg:pr-0 lg:w-2/6 -mt-8 lg:m-0
  from-black to-pink bg-gradient-to-r lg:from-pink/50 lg:via-transparent lg:to-transparent space-y-4 lg:space-y-10">
    <h1 class="text-4xl xl:text-6xl tracking-tighter font-medium font-header uppercase">
        Oompah Brass
    </h1>
    <h2 class="text-lg lg:text-2xl uppercase font-light">
      The original Rock 'n' Roll Oompah Band
    </h2>
    <Button to="/contact" class="block lg:text-xl">
      Get in touch
    </Button>
  </div>

  <!-- Right Section -->
  <div class="hidden relative lg:flex flex-col justify-center bg-gray-800 text-white w-4/6" 
    style="clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);">
    <slot />
  </div>
</div>


</template>