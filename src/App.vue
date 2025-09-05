<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'

</script>

<template>
  <main class="min-h-screen flex flex-col relative bg-black text-white">
    <Nav />
    <RouterView class="flex-grow mt-16 lg:mt-20" />
    <AudioPlayer class="fixed bottom-4 right-6 z-40" />
    <Footer class="z-30" />
  </main>
</template>
