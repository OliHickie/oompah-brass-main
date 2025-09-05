<script setup>
import InstagramLogo from '@/components/icons/InstagramLogo.vue'
import FacebookLogo from '@/components/icons/FacebookLogo.vue'
import BandcampLogo from '@/components/icons/BandcampLogo.vue'
import YoutubeLogo from '@/components/icons/YoutubeLogo.vue'
import PrimaryBtn from '@/components/PrimaryBtn.vue'

const Year = new Date().getFullYear()

const iconClasses = 'w-10 md:w-12 aspect-square inline-block border-2 rounded-full border-transparent hover:border-white hover:text-white p-2'

</script>

<template>
 <footer class="text-center text-white pb-24 bg-black">
  <!-- Social Media Links -->
  <div class="bg-pink py-4 md:py-6 flex justify-center space-x-4 md:space-x-10">
    <a href="https://www.instagram.com" target="_blank">
      <InstagramLogo :class="iconClasses" />
    </a>
    <a href="https://www.facebook.com" target="_blank">
      <FacebookLogo :class="iconClasses" />
    </a>
    <a href="https://www.youtube.com" target="_blank">
      <YoutubeLogo :class="iconClasses" />
    </a>
    <a href="https://www.bandcamp.com" target="_blank">
      <BandcampLogo :class="iconClasses" />
    </a>
  </div>

  <!-- Call-to-Action -->
  <div class="mt-6">
    <p class="text-gray-300">Catch us live at our next show!</p>
    <PrimaryBtn to="/live" class="mt-2 mx-auto">
      See upcoming shows
    </PrimaryBtn>
  </div>

  <!-- Copyright -->
  <p class="text-white pt-8">&copy; {{ Year }} OOMPAH BRASS</p>
</footer>

</template>