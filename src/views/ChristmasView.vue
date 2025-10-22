<script setup>
import Button from '@/components/PrimaryBtn.vue'
import Marquee from '@/components/Marquee.vue'
import SocialMediaSection from '@/components/SocialMediaSection.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Oompah Brass | Christmas Party Band – Festive Live Entertainment UK',
  meta: [
    {
      name: 'description',
      content: 'Book Oompah Brass for your Christmas party, corporate event, or winter festival. High-energy brass versions of Christmas classics like Fairytale of New York and All I Want for Christmas.'
    },
    {
      property: 'og:title',
      content: 'Oompah Brass – The Ultimate Christmas Party Band'
    },
    {
      property: 'og:description',
      content: 'Experience the festive magic with Oompah Brass. Live brass, Christmas hits, and unmatched party energy!'
    },
    {
      property: 'og:image',
      content: 'https://yourdomain.com/path-to-social-image.jpg'
    },
    {
      name: 'keywords',
      content: 'Christmas band, Christmas entertainment, Oompah band, corporate Christmas party, brass band, UK live band'
    }
  ]
});

import bennyChristmas from '../assets/images/christmas/oompah-brass-benny-christmas-party.jpg'
import christmasEvent from '../assets/images/christmas/oompah-brass-christmas-event.jpg'
import katzParty from '../assets/images/christmas/oompah-brass-trumpet-player.jpg'
import metaParty from '../assets/images/christmas/oompah-brass-meta-christmas-party.jpg'

const photos = [
  { src: bennyChristmas, alt: 'Oompah Brass trumpet at Christmas Party' },
  { src: metaParty, alt: 'Oompah Brass at Meta Christmas Party' },
  { src: christmasEvent, alt: 'Oompah Brass at Christmas event' },
  { src: katzParty, alt: 'Oompah Brass performing at Christmas party' }
]

const tracks = [
  {
    title: "Fairytale of New York",
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1808495001&color=%23ff369b&inverse=false&auto_play=false&show_user=true"
  },
  {
    title: "All I Want for Christmas",
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1808493111&color=%23ff369b&inverse=false&auto_play=false&show_user=true"
  },
  {
    title: "Walking in the Air",
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1808495625&color=%23ff369b&inverse=false&auto_play=false&show_user=true"
  }
]
</script>

<template>
  <main>
    <h1 class="text-center md:hidden text-4xl md:text-6xl text-white font-header pt-8" aria-hidden="true">
      Christmas with Oompah Brass
    </h1>
    <!-- Hero Section -->
    <section class="relative md:flex max-w-screen-xl mx-auto py-6 md:py-16  px-4 md:px-16">

      <div class="flex justify-center lg:w-1/4">
        <div class="w-[320px] md:w-[380px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
          <iframe class="w-full h-full" src="https://www.youtube.com/embed/8I8WRZIvFkU"
            title="Oompah Brass Christmas Video" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen loading="lazy">
          </iframe>
        </div>
      </div>

      <div class="px-4 lg:w-3/4">
        <h1 class="hidden md:block text-4xl md:text-6xl text-white font-header text-center">
          Christmas with Oompah Brass
        </h1>
        <h2 class="text-2xl lg:text-4xl font-header italic font-medium mt-10">
          Festive favourites, reimagined with the unmistakable <span class="text-pink">Oompah Brass</span> twist.
        </h2>
        <p class="text-md md:text-lg mt-8">
          From <span class="text-pink font-semibold">Fairytale of New York</span> to <span
            class="text-pink font-semibold">All I Want for Christmas</span>, we bring our signature brass-fuelled
          energy to
          every festive stage — transforming Christmas classics into unforgettable live anthems.
        </p>
        <p class="text-md md:text-lg mx-auto mt-4">
          Whether it’s a <span class="text-pink font-semibold">corporate Christmas party</span>,
          <span class="text-pink font-semibold">Christmas market</span>, or
          <span class="text-pink font-semibold">winter festival</span>,
          Oompah Brass deliver a night packed with laughter, singalongs, and festive fun.
        </p>
        <Button to="/contact" class="mx-auto block lg:text-xl mt-8">
          Book Your Christmas Event
        </Button>
      </div>
    </section>

    <!-- SoundCloud Grid -->
    <section class="bg-black px-4 pb-20 mt-10">
      <div class="container mx-auto text-center">
        <h3 class="text-xl lg:text-3xl font-header italic mb-6">A taste of Christmas Oompah!</h3>
        <p class="text-md md:text-lg max-w-3xl mx-auto mb-10">
          Get in the festive spirit with these high-energy Christmas tracks!
        </p>

        <!-- Track Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(track, index) in tracks" :key="index"
            class="rounded-2xl overflow-hidden shadow-lg bg-white p-4 flex flex-col justify-between">
            <h4 class="text-md md:text-lg font-semibold mb-2 text-pink">{{ track.title }}</h4>
            <iframe class="w-full h-24 md:h-28 rounded-lg" :src="track.url" scrolling="no" frameborder="no"
              allow="autoplay"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media Section -->
    <SocialMediaSection :photos="photos" />

    <Marquee />
  </main>
</template>
