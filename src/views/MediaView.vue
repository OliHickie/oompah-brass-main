<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showHub = computed(() => route.name === 'media')
</script>

<template>
  <section v-if="showHub" class="container mx-auto px-4 py-16 md:py-24 max-w-3xl text-center">
    <h1 class="font-header text-4xl md:text-6xl uppercase">Photos and videos</h1>
    <p class="mt-6 text-lg">
      Oompah Brass live, from Oktoberfest stages to weddings and festivals.
    </p>
    <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      <router-link to="/media/gallery" class="px-6 py-3 border border-white uppercase font-semibold hover:text-pink hover:border-pink">
        Photos
      </router-link>
      <router-link to="/media/videos" class="px-6 py-3 border border-white uppercase font-semibold hover:text-pink hover:border-pink">
        Videos
      </router-link>
    </div>
  </section>
  <RouterView v-else />
</template>
