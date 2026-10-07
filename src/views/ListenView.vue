<script setup>
const playerSrc = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/423520517&color=%23ff369b&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
</script>

<template>
  <section class="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-3xl">
    <h1 class="font-header text-4xl md:text-6xl uppercase">Listen</h1>
    <p class="mt-4 text-lg">
      Recordings from Oompah Brass. Pick a track and press play.
    </p>
    <iframe
      class="mt-8 w-full"
      height="520"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      title="Oompah Brass on SoundCloud"
      :src="playerSrc"
    />
  </section>
</template>
