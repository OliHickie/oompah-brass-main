<script setup>
import { ref, onMounted } from 'vue'

const photos = ref([])

onMounted(async () => {
  const res = await fetch('/data/gallery.json')
  const data = await res.json()

  photos.value = data
    .sort((a, b) => a.order - b.order)
    .map(item => ({
      ...item,
      url: `/gallery/${item.name}`
    }))
})
</script>

<template>
  <div class="container mx-auto text-center px-4 py-24">
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
