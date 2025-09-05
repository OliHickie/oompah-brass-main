<script setup>
import { ref } from 'vue'


const videos = [
  {
    videoUrl: "Qiqefq5ghNc",
    image: "https://img.youtube.com/vi/Qiqefq5ghNc/maxresdefault.jpg",
    title: "Oktoberfest highlights"
  },
  {
    videoUrl: "2fxIajBC6l0&t",
    image: "	https://i.ytimg.com/vi/2fxIajBC6l0/hq720.jpg?sqp=-…HIgUyhBMA8=&rs=AOn4CLAawI6emu3OwCtkcLNLKBstsXn3DQ",
    title: "Bohemian Rhapsody"
  },
  {
    videoUrl: "Uac2h94Qr4U?si=DCxikENYSitqDPtT",
    image: "https://i.ytimg.com/vi/Uac2h94Qr4U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOfpWt6KiKhhjcbT4KQaFT9-4mtA",
    title: "Showreel"
  },
  {
    videoUrl: "8xwdrZJltqM",
    image: "https://i.ytimg.com/vi/8xwdrZJltqM/hq720.jpg?sqp=-…GUgWShRMA8=&rs=AOn4CLBpw8q8O6Wm7M_cnZxYBdfVxDaoOA",
    title: "Welcome to the Jungle"
  },
  {
    videoUrl: "5T0bF-8YQ0U",
    image: "https://img.youtube.com/vi/5T0bF-8YQ0U/maxresdefault.jpg",
    title: "BBC Newsnight - Kurt Cobain tribute"
  },
  {
    videoUrl: "JKzcss2tDiw",
    image: "https://img.youtube.com/vi/JKzcss2tDiw/maxresdefault.jpg",
    title: "Bohemian Rhapsody with Orchestra"
  }
]

const activeVideo = ref(videos[0])

const selectVideo = (video) => {
  activeVideo.value = video
  window.scrollTo({ top: 0, behavior: 'smooth' })
}


</script>

<template>
  <div class="py-16 px-4 md:px-10 2xl:px-20 lg:h-[90vh] flex flex-col lg:flex-row">
    <!-- Video player -->
    <div class="border border-pink lg:w-3/4 w-full aspect-video bg-red p-2 lg:mx-8 rounded-xl relative">
      <iframe 
        :src="`https://www.youtube.com/embed/${activeVideo.videoUrl}`" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;" 
        allowfullscreen 
        class="w-full h-full rounded-xl"
      ></iframe>
    </div>

    <!-- Video list -->
    <div 
      class=" lg:w-1/4 md:w-3/5 w-full min-w-[200px] bg-red rounded-xl lg:overflow-y-auto mt-12 lg:mt-0 mx-auto"
    >
      <!-- Title for small screens -->
      <h2 class="text-white text-lg font-semibold px-4 py-2 border-b border-white">
        Select a video ...
      </h2>

      <ul class="p-2 space-y-4">
        <li 
          v-for="video in videos" 
          :key="video.videoUrl"
          class="relative cursor-pointer p-4"
          @click="selectVideo(video)"
        >
        <div>
          <img 
            :src="video.image"
            :alt="video.title" 
            class="w-full aspect-video border border-transparent rounded-lg hover:border-white transition-all"
          >
          <div class="absolute bottom-3 inset-x-3 border border-transparent bg-black/70 text-white text-sm p-2 truncate m-1 rounded-b-lg">
            {{ video.title }}
          </div>
        </div>
        </li>
      </ul>
    </div>
  </div>
</template>



