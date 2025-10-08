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
  <div class="mt-6 flex flex-col md:flex-row md:justify-center md:space-x-36 space-y-6 md:space-y-0">
    <aside>

      <p class="text-gray-300">Catch us live at our next show!</p>
      <PrimaryBtn to="/live" class="mt-2 mx-auto">
        See upcoming shows
      </PrimaryBtn>
    </aside>
    <section class="text-center md:text-left">
      <p>Oompah Brass</p>
      <p>London, UK</p>
      <p>Email: <a href="mailto:info@oompahbrass.com" class="underline">info@oompahbrass.com</a></p>
      <p>Phone: <a href="tel:+447967604032" class="underline">+44 7967 604032</a></p>
    </section>
  </div>

  <!-- Copyright -->
  <p class="text-white pt-12">&copy; {{ Year }} OOMPAH BRASS</p>
</footer>

</template>