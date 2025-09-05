<script setup>
import Button from '@/components/PrimaryBtn.vue'
import HomeHero from '@/components/HomeHero.vue'
import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon.vue'

</script>

<template>
  <div class="relative">
    <HomeHero>
      <img 
        src="../assets/images/oompah-brass-jumping.jpg"
        class="h-full w-full object-cover"
      >
    </HomeHero>

    <div>
      <!-- Highlight Quote Section -->
      <section class="max-md:flex-col max-md:items-center flex justify-center items-end md:space-x-12 py-12 md:py-24">
        <h3 class="text-xl lg:text-3xl font-semibold font-header italic">"Legends in Lederhosen"</h3>
        <p class="lg:text-right text-lg lg:text-xl text-pink">Chris Evans, BBC Radio 2</p>
      </section>

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
            rock and pop such as Queen, The Killers, Britney Spears, The Beatles, Taylor Swift, and many more. Renowned for our 
            <span class="text-pink">electrifying performances</span> and <span class="text-pink">high energy</span>, we've been captivating audiences and redefining what it means to 
            be an Oompah band. We were also proud winners of the prestigious 
            <a href="https://haizetara.eus/en/home-2/" class=" underline">
              International Haizetara Street Band competition <ExternalLinkIcon class="aspect-square h-3 mx-1 inline" />
            </a>.
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
            Check out our <router-link class="text-pink cursor-pointer" to="/live">live dates</router-link>, join us for a night of unforgettable music 
            and laughter, and experience the unrivalled Oompah show!
          </p>
          <!-- Call-to-Action Button -->
          <Button to="/contact" class="block lg:text-xl mx-auto">
            Book us for your event
          </Button>
        </section>

        <!-- Image Section -->
        <img 
          src="../assets/images/benny-trumpet-oompah-brass.jpg" 
          alt="Benny Beavis passionately playing the trumpet Durham Brass Festival in a glittery pink jacket" 
          class="lg:w-1/2 object-cover lazy-load">
      </div>
    </div>

    <section class="text-center pb-12 space-y-8">
      <h3 class="text-3xl md:text-5xl font-semibold font-header italic text-pink">#OompahBrass</h3>
      <p class="text-xl md:text-2xl">View our latest news and content</p>
      <Button href="https://www.instagram.com/oompahbrass" target="_blank" class="block lg:text-xl mx-auto">
        Follow us on Instragram
      </Button>
    </section>
    <img 
      src="../assets/images/oompah-brass-scream.jpg" 
      alt="Oompah Brass - in pink t-shirts imitating Edvard Munch painting 'The Scream'" 
      class="w-full relative lazyload">
  </div>
</template>