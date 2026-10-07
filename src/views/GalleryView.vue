<script setup>
import galleryData from '../../public/data/gallery.json'

const photos = [...galleryData]
  .sort((a, b) => a.order - b.order)
  .map(item => ({
    ...item,
    url: `/gallery/${item.name}`
  }))
</script>

<template>
  <div class="container mx-auto text-center px-4 py-24">
    <h1 class="font-header text-4xl md:text-6xl uppercase mb-4">Oompah Brass photos</h1>
    <p class="max-w-2xl mx-auto mb-10 text-lg">Live shots of the London oompah band at Oktoberfest, festivals, weddings and parties.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <img
        v-for="photo in photos"
        :key="photo.name"
        :src="photo.url"
        :alt="photo.alt"
        class="rounded-xl shadow-sm shadow-gray-700 w-full object-cover h-80 mx-auto border border-gray-800"
        loading="lazy"
      />
    </div>
  </div>
</template>
