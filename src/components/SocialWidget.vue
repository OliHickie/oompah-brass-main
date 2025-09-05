<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  (function(d, s, id) { 
    var js
    if (d.getElementById(id)) {
      return;
    } 
    js = d.createElement(s)
    js.id = id
    js.src = "https://embedsocial.com/cdn/ht.js"
    d.getElementsByTagName("head")[0].appendChild(js)
  }(document, "script", "EmbedSocialHashtagScript"))
})

  

</script>

<template>
  <div class="embedsocial-hashtag" data-ref="b209c87f090688b56be624b06bcfd6bbf02b4c52">

  </div>
</template>