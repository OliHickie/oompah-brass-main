<script setup>

defineProps({
  to: String,
  href: String,
  target: String
})

const buttonClasses = "px-6 py-3 border border-white bg-transparent uppercase font-semibold hover:text-pink hover:border-pink"

</script>

<template>
  <button v-if="!to && !href" :class="buttonClasses">
    <slot />
  </button>
  <a v-else-if="href" :href="href" :target="target ? target : `_self`" :class="`${buttonClasses} block w-fit`">
    <slot />
  </a>
  <router-link v-else :class="`${buttonClasses} block w-fit`" :to="to">
    <slot />
  </router-link>
</template>
