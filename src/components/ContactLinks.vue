<script setup>
import MailIcon from '@/components/icons/MailIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'

</script>

<template>
  <a href="tel:+447967604032" class="block mb-2">
    <PhoneIcon class="h-5 w-5 inline-block text-pink" />
    <span class="ml-2 hover:text-pink">07967 604032</span>
  </a>
  <a href="mailto:info@oompahbrass.com" class="block">
    <MailIcon class="h-5 w-5 inline-block text-pink" />
    <span class="ml-2 hover:text-pink">info@oompahbrass.com</span>
  </a>
</template>