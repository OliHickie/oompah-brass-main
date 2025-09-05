<script setup>
import PinkButton from './PinkButton.vue';
import ChevronIcon from './icons/ChevronIcon.vue';
import XMark from './icons/XMark.vue'
import MusicIcon from './icons/MusicIcon.vue';
import { ref } from 'vue';

const open = ref(false);

const togglePlayer = () => {
  open.value = !open.value;
};

</script>

<template>
  <div class="text-white text-right">
    <div class="relative">
      <span v-if="open" class="absolute right-0 -top-3 flex items-center cursor-pointer bg-pink rounded-full" @click="togglePlayer()">
        <XMark class="w-6 aspect-square inline-block cursor-pointer"  />
      </span>
    </div>
    <iframe width="320" :height="open ? 450 : 0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/423520517&color=%23ff369b&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false" class="transition-all" />
    <PinkButton class="mt-1 block" @click="togglePlayer()">
      Listen 
      <MusicIcon class="w-4 h-4 inline-block ml-1 mr-3" />
      <ChevronIcon :class="['w-4 h-4 inline-block transition-all', { 'rotate-180' : !open }  ]" />
    </PinkButton> 
  </div>
</template>