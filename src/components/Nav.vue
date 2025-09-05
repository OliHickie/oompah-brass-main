<script setup>
import { ref, watch } from 'vue'
import ChevronIcon from './icons/ChevronIcon.vue'
import { useRoute } from 'vue-router';

const links = [
  { name: 'Home', path: '/' },
  { 
    name: 'Media',
    path: '/media',
    submenu: [
      { name: 'Gallery', path: '/media/gallery' },
      { name: 'Videos', path: '/media/videos' },
    ],
    submenuOpen: false
  },
  // { name: 'Education', path: '/education' },
  { name: 'Live', path: '/live' },
  { name: 'Contact', path: '/contact' },
]

const mobileLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/media/gallery' },
  { name: 'Videos', path: '/media/videos' },
  // { name: 'Education', path: '/education' },
  { name: 'Live', path: '/live' },
  { name: 'Contact', path: '/contact' },
]

const navOpen = ref(false)
const mediaDropdownOpen = ref(false)

const openSubmenu = () => {
  mediaDropdownOpen.value = !mediaDropdownOpen.value
}

const toggleNav = () => {
  navOpen.value = !navOpen.value
}

const route = useRoute()

watch(() => route.fullPath, () => {
  navOpen.value = false
  mediaDropdownOpen.value = false
})

const navClasses = "fixed z-20 top-0 w-full bg-black font-header border-b-4 border-black"

</script>

<template>
  <nav :class="['hidden lg:flex justify-end items-center px-12 py-6', navClasses]">
    <img 
      src="../assets/images/oompah-brass-logo.png" 
      alt="Oompah Brass Logo"
      class="h-28 fixed top-4 left-8"
    >
    <ul class="flex justify-center space-x-8 relative">
      <li v-for="link in links" :key="link.name">
        <router-link v-if="!link.submenu" :to="link.path" class="text-white 
        uppercase text-xl font-header hover:text-pink hover:border-b-4 
        hover:border-pink">
          {{ link.name }}
        </router-link>

        <!-- ITEM WITH DROPDOWN  -->
        <div 
          v-if="link.submenu" 
          :class="['uppercase text-xl font-header hover:text-pink border-b-4 border-transparent hover:border-pink cursor-pointer flex items-center', 
            mediaDropdownOpen ? 'text-pink' : 'text-white' 
          ]" 
          @click.prevent="openSubmenu()"
        >
          {{ link.name }} 
          <ChevronIcon :class="['w-4 aspect-square ml-2 transition-all', { 'rotate-180' : mediaDropdownOpen }]" />
        </div>
        <ul 
          id="dropdown" 
          v-if="link.submenu && mediaDropdownOpen" 
          class="absolute bg-black py-4 pl-6 pr-8 rounded space-y-2"
        >
          <li v-for="item in link.submenu" :key="item.name">
            <router-link :to="item.path" class="text-white uppercase text-lg font-header hover:text-pink">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>

  <!-- Mobile nav -->
  <nav :class="['lg:hidden flex justify-between items-center px-4 py-2 z-40', navClasses]">
    <img
      src="../assets/images/oompah-brass-logo.png" 
      alt="Oompah Brass Logo"
      class="h-16 z-30"
    >
    <button class="flex flex-col justify-center items-center group z-30" @click="toggleNav()">
      <span :class="['h-1 w-8 my-1 rounded transition ease transform duration-300', 
        navOpen ? 'rotate-45 translate-y-3 bg-pink' : 'bg-white'
      ]"></span>
      <span :class="['h-1 w-8 my-1 rounded transition ease transform duration-300',
        navOpen ? 'opacity-0' : 'bg-white'
      ]"></span>
      <span :class="['h-1 w-8 my-1 rounded transition ease transform duration-300',
        navOpen ? '-rotate-45 -translate-y-3 bg-pink' : 'bg-white'
      ]"></span>
    </button>
    <div :class="[`absolute w-full left-0 h-screen bg-black transition-all duration-500`, 
    navOpen ? 'top-0' : '-top-[1200px]']">
      <ul class="flex flex-col items-center space-y-4 bg-black w-full absolute 
      top-16 left-0 py-4">
        <li v-for="link in mobileLinks" :key="link.name">
          <router-link :to="link.path" class="text-white uppercase text-xl font-header hover:text-pink">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
