<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
import { OG_IMAGE, canonicalUrl, jsonLdFor, pages } from '@/seo'
import { trackVisit } from '@/visitReport'

const route = useRoute()

onMounted(() => trackVisit(route))
watch(() => route.fullPath, () => trackVisit(route))

useHead(computed(() => {
  const page = pages[route.name] || {
    title: 'Oompah Brass',
    description: pages.home.description,
    path: route.path,
    robots: 'noindex, follow',
  }
  const canonical = canonicalUrl(page.path || route.path)
  const imageAlt = 'Oompah Brass jumping on stage in pink shirts'

  return {
    title: page.title,
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'description', content: page.description },
      { name: 'robots', content: page.robots || 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Oompah Brass' },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:title', content: page.title },
      { property: 'og:description', content: page.description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:secure_url', content: OG_IMAGE },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: imageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: page.title },
      { name: 'twitter:description', content: page.description },
      { name: 'twitter:image', content: OG_IMAGE },
      { name: 'twitter:image:alt', content: imageAlt },
    ],
    script: jsonLdFor(route.name).map((data, index) => ({
      key: `ldjson-${route.name || 'page'}-${index}`,
      type: 'application/ld+json',
      innerHTML: JSON.stringify(data).replace(/</g, '\\u003c'),
    })),
  }
}))
</script>

<template>
  <main class="min-h-screen flex flex-col relative bg-black text-white">
    <Nav />
    <RouterView class="flex-grow mt-20 lg:mt-20" />
    <!-- <RouterView class="flex-grow mt-16 lg:mt-20" /> -->
    <AudioPlayer v-if="route.name !== 'listen'" class="fixed bottom-4 right-6 z-40" />
    <Footer class="z-30" />
  </main>
</template>
