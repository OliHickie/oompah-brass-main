<script setup>
import Button from '@/components/PrimaryBtn.vue'
import HomeHero from '@/components/HomeHero.vue'
import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon.vue'
import Marquee from '@/components/Marquee.vue'
import SocialMediaSection from '@/components/SocialMediaSection.vue'


import backstage from '../assets/images/oompah-brass-backstage.jpg';
import bermuda from '../assets/images/oompah-brass-bermuda.png';
import durham from '../assets/images/oompah-brass-durham-brass-festiv.jpg';
import gala from '../assets/images/oompah-brass-gala-dinner.jpg';


const photos = [
  { src: backstage, alt: '"Backstage at Oktoberfest in Colchester"' },
  { src: bermuda, alt: '"Soaking up the sun back in Bermuda!"' },
  { src: durham, alt: '"Having fun at Durham Brass Festival"' },
  { src: gala, alt: '"About to perform at a Gala dinner event in London"' },
];

</script>

<template>
  <div class="relative">
    <HomeHero>
      <img src="../assets/images/oompah-brass-jumping.jpg" class="h-full w-full object-cover"
        alt="Oompah Brass jumping in the air wearing pink t-shirts at party" loading="eager" fetchpriority="high">
    </HomeHero>

    <div>
      <!-- Highlight Quote Section -->
      <section class="md:space-x-12 py-12 md:py-20 text-center">
        <h2 class="text-xl lg:text-3xl font-semibold font-header italic">
          "Legends in Lederhosen"
          <span class="block lg:inline text-lg lg:text-xl text-pink font-sans">Chris Evans, BBC Radio 2</span>
        </h2>
      </section>

      <Marquee />

      <!-- About Us Section -->
      <div class="lg:flex container mx-auto mb-24">
        <!-- Text Content -->
        <section class="lg:w-1/2 pb-8 lg:pb-0 px-4 md:px-8 lg:px-12 text-md lg:text-lg space-y-6">
          <p>
            The
            <span class="text-xl lg:text-3xl font-light text-pink italic font-header tracking-tighter p-1">
              ultimate
            </span>
            five-piece Oompah band - we are
            <span class="font-semibold uppercase p-1 text-xl lg:text-3xl text-pink">Oompah Brass!</span>
          </p>
          <p>
            We are the UK's original rock 'n' roll Oompah band, a 5-piece brass ensemble specialising in virtuosic,
            high-energy versions of rock and pop classics like you’ve never heard before!
          </p>
          <p>
            Since forming in 2006, we've been transforming the traditional Oompah sound, blending it with legends of
            rock and pop such as Queen, The Killers, Britney Spears, The Beatles, Taylor Swift, and many more. Renowned
            for our
            <span class="text-pink">electrifying performances</span> and <span class="text-pink">high energy</span>,
            we've been captivating audiences and redefining what it means to
            be an Oompah band. We were also proud winners of the prestigious
            <a href="https://haizetara.eus/en/home-2/" class=" underline">
              International Haizetara Street Band competition
              <ExternalLinkIcon class="aspect-square h-3 mx-1 inline" />
            </a>
          </p>
          <!-- Highlighted Quote -->
          <p class="md:text-lg border-y-2 border-pink py-4 md:py-8 text-center md:mx-8">
            <span class="text-lg md:text-xl font-semibold font-header italic mr-2 block md:inline">
              'Genuinely my favourite band!'
            </span>
            <span class="text-pink md:ml-4">Alex Horne, Taskmaster</span>
          </p>
          <p>
            Dubbed 'Legends in Lederhosen' by none other than Chris Evans on BBC Radio 2, we have travelled the world,
            playing over 100 gigs a year, and thrilling audiences from intimate Bierkellers to large, international
            festivals. Our unique Bavarian spin on classics like
            <em class="font-light">Bohemian Rhapsody</em> and
            <em class="font-light">Stairway to Heaven</em>
            has earned us a reputation for being more than just a band -
            <span class="text-pink">we're an experience!</span>
          </p>
          <p>
            Check out our <router-link class="text-pink cursor-pointer" to="/live">live dates</router-link>, join us for
            a night of unforgettable music
            and laughter, and experience the unrivalled Oompah show!
          </p>
          <!-- Call-to-Action Button -->
          <Button to="/hire" class="block lg:text-xl mx-auto">
            Hire an oompah band
          </Button>
        </section>

        <!-- Image Section -->
        <img src="../assets/images/benny-trumpet-oompah-brass.jpg"
          alt="Benny Beavis passionately playing the trumpet Durham Brass Festival in a glittery pink jacket"
          class="lg:w-1/2 object-cover" loading="lazy">
      </div>
    </div>

    <section class="container mx-auto px-4 md:px-8 lg:px-12 pb-24 max-w-3xl text-md lg:text-lg leading-relaxed space-y-6">
      <h2 class="font-header text-3xl md:text-5xl uppercase text-center leading-none">
        Oompah band for hire in London and across the UK
      </h2>
      <p>
        Need an oompah band in London, or anywhere else in the UK? Oompah Brass is a five-piece based in London. We play Oktoberfest, weddings, festivals, company parties and private events, with rock and pop arranged for brass.
      </p>
      <p>
        The
        <router-link to="/hire" class="text-pink underline">hire page</router-link>
        covers how a booking works, what we play, and where we travel.
        Public shows are on
        <router-link to="/live" class="text-pink underline">live dates</router-link>.
      </p>
      <Button to="/contact" class="block lg:text-xl mx-auto">
        Book us for your event
      </Button>
    </section>

    <SocialMediaSection :photos="photos" />

    <img src="../assets/images/oompah-brass-scream.jpg"
      alt="Oompah Brass - in pink t-shirts imitating Edvard Munch painting 'The Scream'" class="w-full relative"
      loading="lazy">
  </div>
</template>