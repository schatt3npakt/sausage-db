<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li
            class="glide__slide"
            v-for="video in videos"
            :key="video.id"
        >
          <iframe class="glide__video" width="600" height="450" :src="`https://www.youtube-nocookie.com/embed/${video.videoID}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </li>
      </ul>
    </div>

    <div class="glide__bullets" data-glide-el="controls[nav]">
      <button class="glide__bullet" data-glide-dir="=0"></button>
      <button class="glide__bullet" data-glide-dir="=1"></button>
      <button class="glide__bullet" data-glide-dir="=2"></button>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  mounted: function () {
    window.onload = () => {
      new Glide('.glide', {
        autoplay: 2000,
        hoverpause: true,
        perView: 1,
        startAt: 0,
        type: 'carousel'
      }).mount()
    };
  },
  name: 'VideoSlider',
  props: {
    videos: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.glide {
  margin: auto;
  max-width: 600px;
}

.glide__video {
  height: 415px;
  width: 600px;
}
</style>
