<script setup>
import { ref } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import bbcBreakfastLogo from '@/assets/images/logos/bbc-breakfast.png';
import bbcRadio2Logo from '@/assets/images/logos/bbc-radio-2.png';
import bbcRadio3Logo from '@/assets/images/logos/bbc-radio-3.png';
import bbcRadio6MusicLogo from '@/assets/images/logos/bbc-radio-6-music.png';
import bbcRadioOneLogo from '@/assets/images/logos/bbc-radio-one.png';
import bbcTheOneShowLogo from '@/assets/images/logos/bbc-the-one-show.png';
import bestivalLogo from '@/assets/images/logos/bestival-logo.jpg';
import isleOfWightFestivalLogo from '@/assets/images/logos/isle-of-wight-festival-logo.jpg';
import itvLogo from '@/assets/images/logos/itv-logo.svg';
import kendalCallingFestivalLogo from '@/assets/images/logos/kendal-calling-festival.png';
import radioFiveLiveLogo from '@/assets/images/logos/radio-five-live-logo.png';

const photos = ref([
  { url: bbcBreakfastLogo, alt: 'BBC Breakfast' },
  { url: bbcRadio2Logo, alt: 'BBC Radio 2' },
  { url: isleOfWightFestivalLogo, alt: 'Isle of Wight Festival Logo' },
  { url: bbcRadioOneLogo, alt: 'BBC Radio One' },
  { url: itvLogo, alt: 'ITV Logo' },
  { url: bbcTheOneShowLogo, alt: 'BBC The One Show' },
  { url: bestivalLogo, alt: 'Bestival Logo' },
  { url: bbcRadio3Logo, alt: 'BBC Radio 3' },
  { url: radioFiveLiveLogo, alt: 'Radio Five Live' },
  { url: bbcRadio6MusicLogo, alt: 'BBC Radio 6 Music' },
  { url: kendalCallingFestivalLogo, alt: 'Kendal Calling Festival' },
  { url: bbcBreakfastLogo, alt: 'BBC Breakfast' },
  { url: bbcRadio2Logo, alt: 'BBC Radio 2' },
  { url: isleOfWightFestivalLogo, alt: 'Isle of Wight Festival Logo' },
  { url: bbcRadioOneLogo, alt: 'BBC Radio One' },
  { url: itvLogo, alt: 'ITV Logo' },
  { url: bbcTheOneShowLogo, alt: 'BBC The One Show' },
  { url: bestivalLogo, alt: 'Bestival Logo' },
  { url: bbcRadio3Logo, alt: 'BBC Radio 3' },
  { url: radioFiveLiveLogo, alt: 'Radio Five Live' },
  { url: bbcRadio6MusicLogo, alt: 'BBC Radio 6 Music' },
  { url: kendalCallingFestivalLogo, alt: 'Kendal Calling Festival' },
]);
console.log(photos.value)

</script>

<template>
  <div class="bg-white h-24">
    <Vue3Marquee :duration="50" :reverse="false">
      <!-- <span v-for="photo in photos" :key="photo.alt" class="mx-6 my-4 md:mx-12 md:my-8">
        <img :src="photo.url" :alt="photo.alt" height="50" width="auto" />
      </span> -->
      <span>HELLO CONTENT</span>
    </Vue3Marquee>
  </div>
</template>