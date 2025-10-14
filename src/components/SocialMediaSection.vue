<script setup>
import Button from '@/components/PrimaryBtn.vue';


defineProps({
  photos: {
    type: Array,
    required: true,
    default: () => [],
  },
})

</script>

<template>
  <section class="pb-16 bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-2">
    <div class="text-center space-y-4">
      <h3 class="text-2xl md:text-4xl font-bold italic text-pink drop-shadow-lg">#OompahBrass</h3>
      <p class="text-lg md:text-xl">
        Check out our latest adventures, performances, and behind-the-scenes fun!
      </p>
      <Button 
        href="https://www.instagram.com/oompahbrass" 
        target="_blank" 
        class="mx-auto"
      >
        Follow us on Instagram
      </Button>
    </div>

    <!-- Photo Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 max-w-6xl w-full">
        <div
        v-for="(photo, index) in photos"
        :key="index"
        class="relative overflow-hidden rounded-3xl"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          class="w-full aspect-square object-cover"
          loading="lazy"
        />
      </div>
    </div>

  </section>
</template>

