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
      <button
          class="glide__bullet"
          v-for="(video, index) in videos"
          :data-glide-dir="glideData(index)"
          :key="video.id"
      ></button>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  methods: {
    glideData: function (index) {
      return "=" + index
    }
  },
  mounted: function () {
    window.onload = () => {
      new Glide('.glide', {
        autoplay: 2500,
        hoverpause: true,
        perView: 1,
        startAt: 0,
        dragThreshold: false,
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
  cursor: auto;
  margin: auto;
  max-width: 600px;
}

.glide__bullet {
  height: 15px;
  margin: 0 8px;
  width: 15px;
}

@media (min-width: 600px) {
  .glide__bullet {
    height: 13px;
    margin: 0 5px;
    width: 13px;
  }
}

.glide__video {
  box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
  cursor: pointer;
  height: 215px;
  width: 400px;
  margin-bottom: 60px;
}

@media (min-width: 600px) {
  .glide__video {
    height: 415px;
    width: 600px;
  }
}
</style>
