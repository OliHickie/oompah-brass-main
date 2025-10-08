<script setup>
import { ref } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import bbcRadio2Logo from '../assets/images/logos/BBC_Radio_2_2022.svg';
import bbcRadio3Logo from '../assets/images/logos/BBC_Radio_3_2022.svg';
import bbcRadio6MusicLogo from '@/assets/images/logos/bbc-radio-6-music.png';
import bbcRadioOneLogo from '../assets/images/logos/BBC_Radio_1_2021.svg';
import bbcTheOneShowLogo from '@/assets/images/logos/bbc-the-one-show.png';
import bestivalLogo from '../assets/images/logos/Bestival-Logo-lrg.webp';
import isleOfWightFestivalLogo from '../assets/images/logos/iow-festival.png';
import itvLogo from '@/assets/images/logos/itv-logo.svg';
import kendalCallingFestivalLogo from '../assets/images/logos/kendall-calling.png';
import radioFiveLiveLogo from '@/assets/images/logos/radio-five-live-logo.png';

const photos = ref([
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
  <div class="bg-[#fff] h-20 md:h-28 flex items-center mb-10">
    <Vue3Marquee :duration="30" :reverse="false">
      <span v-for="photo in photos" :key="photo.alt" class="mx-4 md:mx-10 flex items-center">
        <img :src="photo.url" :alt="photo.alt" class="h-10 md:h-12" />
      </span>
    </Vue3Marquee>
  </div>
</template>