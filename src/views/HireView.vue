<script setup>
import Button from '@/components/PrimaryBtn.vue'
import { hireFaqs } from '@/seo'
</script>

<template>
  <article class="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-3xl text-md lg:text-lg leading-relaxed">
    <p class="uppercase tracking-widest text-pink text-sm font-header">London, UK & Worldwide</p>
    <h1 class="font-header text-4xl md:text-6xl uppercase leading-none mt-3">
      Hire an oompah band
    </h1>
    <p class="text-xl md:text-2xl font-light mt-6">
      Oompah Brass is a five-piece oompah band based in London. We are the UK's original rock 'n' roll oompah band, for Oktoberfest, weddings, festivals and private events.
    </p>

    <section class="mt-12 space-y-6">
      <h2 class="font-header text-3xl md:text-4xl uppercase">An oompah band in London</h2>
      <p>
        The band formed in 2006 and is based in London. We play across the city: Oktoberfest rooms, weddings, company parties, private houses and festival stages. If the event is in London, send the date, the venue and how long you want the set to run.
      </p>
      <p>
        London is home, not the limit. We play across the UK and abroad. Ask about the date and the city and we will tell you if we can get there.
      </p>
    </section>

    <section class="mt-12 space-y-6">
      <h2 class="font-header text-3xl md:text-4xl uppercase">What the booking sounds like</h2>
      <p>
        Five brass players. Rock and pop classics rearranged as oompah: Queen, The Beatles, The Killers, Britney Spears, Taylor Swift and plenty more. <em>Bohemian Rhapsody</em> and <em>Stairway to Heaven</em> are the ones people name. It is loud, melodic, and written for a room that wants to sing.
      </p>
      <p>
        For Oktoberfest and German-themed nights we perform in lederhosen. For weddings, festivals and other parties we also perform in pink and black. Same band, same arrangements, dressed for the event.
      </p>
      <p class="border-y-2 border-pink py-6 text-center">
        <span class="block font-header italic text-xl">"Legends in Lederhosen"</span>
        <span class="text-pink">Chris Evans, BBC Radio 2</span>
      </p>
      <p>
        Alex Horne has called us his favourite band. We were also winners of the
        <a href="https://haizetara.eus/en/home-2/" class="underline text-pink">International Haizetara Street Band competition</a>.
      </p>
    </section>

    <section class="mt-12 space-y-6">
      <h2 class="font-header text-3xl md:text-4xl uppercase">Events we play</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Oktoberfest and Bavarian nights</li>
        <li>Weddings in London and across the UK</li>
        <li>Corporate events, galas and private parties</li>
        <li>
          <router-link to="/christmas" class="underline text-pink">Christmas parties</router-link>,
          with a festive set of its own
        </li>
        <li>Festivals and outdoor shows</li>
      </ul>
      <p>
        Hear the arrangements on the
        <router-link to="/media/videos" class="underline text-pink">videos</router-link>
        and see the rooms we have played in the
        <router-link to="/media/gallery" class="underline text-pink">photos</router-link>.
        Public shows are listed on
        <router-link to="/live" class="underline text-pink">live dates</router-link>.
      </p>
    </section>

    <section class="mt-12 space-y-6">
      <h2 class="font-header text-3xl md:text-4xl uppercase">How to hire the band</h2>
      <p>
        Email <a class="underline text-pink" href="mailto:info@oompahbrass.com">info@oompahbrass.com</a>
        or call <a class="underline text-pink" href="tel:+447967604032">+44 7967 604032</a>.
        The enquiry form asks for your name, a way to reach you, the date and a note about the event. The date, the city and the venue are the details that let us answer properly.
      </p>
      <Button to="/contact" class="lg:text-xl">Enquire about a date</Button>
    </section>

    <section class="mt-16">
      <h2 class="font-header text-3xl md:text-4xl uppercase">Questions about booking</h2>
      <div class="mt-6 divide-y divide-white/20 border-y border-white/20">
        <details v-for="faq in hireFaqs" :key="faq.q" class="py-4">
          <summary class="cursor-pointer font-semibold text-lg">{{ faq.q }}</summary>
          <p class="mt-3">{{ faq.a }}</p>
        </details>
      </div>
    </section>
  </article>
</template>
