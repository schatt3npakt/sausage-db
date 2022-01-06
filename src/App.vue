<template>
  <div class="site-wrapper" id="siteWrapper">
    <BackToTop />
    <!-- <SausageReel :sausageData="madeData" /> -->

    <section>
      <Headline
          message="The Sausage Database"
          :tag="1"
      />

      <p>
        The Sausage Database is a fan project dedicated to listing
        <a href="https://www.youtube.com/c/OrdinarySausage/featured" target="_blank" rel="noopener">Ordinary Sausage's</a>
        sausage creations.
      </p>

      <p>
        It collects data about everything that has been forced through a grinder,
        projectiled across the entire kitchen or lost to the ever looming threat of sausage bursts.
        <br /> Then it gets pressed into a nice, sortable table.
      </p>

      <Searchbar />
    </section>

    <Divider />

    <section>
      <Headline
          message="Sausage Stats"
          :tag="2"
      />

      <SausageStats
          :items="sausageStats"
      />

      <SausageStats
          :items="sausageStats2"
      />
    </section>

    <Divider/>

    <section>
      <Headline
          message="Made Sausages"
          :tag="2"
      />

      <Table :sausageData="madeData"/>
    </section>

    <Divider/>

    <section>
      <Headline
          message="The Data"
          :tag="2"
      />

      <p>
        All data is pulled from the uploaded videos on
        <a href="https://www.youtube.com/c/OrdinarySausage/featured" target="_blank" rel="noopener">Ordinary Sausage's YouTube channel</a>.
      </p>

      <p>
        Would you like to know all about upcoming sausages? Maybe even decide what gets sausaged next? <br>
        Then visit Ordinary Sausage's Patreon to learn more!
      </p>

      <CTA
          message="Go To Patreon"
          link="https://www.patreon.com/ordinarysausage"
      />
    </section>

    <Divider />

    <!--
    <section>
      <Headline
          message="Latest Sausage Videos"
          :tag="2"
      />

      <VideoSlider
          :videos="videos"
      />
    </section>

    <Divider />
-->
    <section>
      <Headline
          message="Contact"
          :tag="2"
      />

      <p>
        Have you spotted an error on the site?<br><br>
        Do you have an idea you would love to share?<br><br>
        Would you like to know who in their right mind binges days of sausage making
        content and then thinks 'How cool would all that look as a table!'?
      </p>

      <CTA
          message="Contact me on Twitter"
          link="https://twitter.com/LucaLaFuria"
      />
    </section>
  </div>
</template>

<script>
import BackToTop from "./components/Back-To-Top";
import CTA from "./components/CTA";
import Divider from "./components/Divider";
import Headline from './components/Headline.vue'
// import SausageReel from "./components/SausageReel";
import SausageStats from "./components/SausageStats";
import Searchbar from "./components/Searchbar";
import Table from './components/Table.vue'
// import VideoSlider from "./components/VideoSlider";

// data imports
import * as madeDataJSON from '/data/madeSausages.json'

export default {
  name: 'App',
  components: {
    BackToTop,
    CTA,
    Divider,
    Headline,
    // SausageReel,
    SausageStats,
    Searchbar,
    Table,
    // VideoSlider
  },
  data: function() {
    return {
      madeData: madeDataJSON.data,
      sausageStats: [
        {id: 0, value: "201", message: "Sausages made!"},
        {id: 1, value: "16", message: "5/5 Sausages!"},
        {id: 2, value: "100", message: "Sausage Bursts!"},
      ],
      sausageStats2: [
        {id: 0, value: "51,03%", message: "Burst-Ratio!"},
        {id: 1, value: "3", message: "Current \n No-Burst Streak!"},
        {id: 2, value: "9", message: "Longest \n No-Burst-Streak!"}
      ],
      videos: [
        {id: 0, videoID: "ph0hjjN__gE"},
        {id: 1, videoID: "v2IZxFbpv0c"},
        {id: 2, videoID: "mHf5LxakShg"},
        {id: 3, videoID: "rl8C1gfhn8w"}
      ]
    };
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');

:root {
  --light-mode-bg-color: #1A5E81;
  --light-mode-font-color: #ffffff;
  --light-mode-headline-color: #FFB091;
  --light-mode-headline-border-color: #FF6C83;
  --light-mode-search-bar-submit-bg-color: #084361;
  --light-mode-table-bg-color: #084361;
  --light-mode-button-hover-bg-color: #0b4b6b;
  --dark-mode-bg-color: #000000;
  --dark-mode-font-color: #000000;
}

html {
  background-color: var(--light-mode-bg-color);
}

html,
body {
  margin: 0;
  padding: 0;
}

.site-wrapper {
  margin: auto;
  max-width: 1440px;
  padding: 10px;
  overflow-x: hidden;
  z-index: 2;
}

@media screen and (min-width: 600px) {
  .site-wrapper {
    max-width: 1440px;
    padding: 50px 25px;
  }
}

.site-wrapper > *:not(.sausage-reel, .back-to-top-button, .sausage-reel__text, #sausageReelCanvas) {
  transition: filter 0.5s ease-out;
}

.site-wrapper__sausage-reel--active > *:not(.sausage-reel, .back-to-top-button, .sausage-reel__text, #sausageReelCanvas) {
  filter: blur(5px);
}

p,
p a {
  color: white;
  font-family: 'Nunito', 'Arial' ,sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1.3;
}


p {
  hyphens: auto;
  margin: 0 auto 40px auto;
  max-width: 600px;
  text-align: center;
}

.site-wrapper::before {
  animation: background-animation 5s linear infinite;
  background-image: url("data:image/png;base64,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");
  content: "";
  display: block;
  height: 200vh;
  left: -125px;
  opacity: 0.5;
  position: fixed;
  top: -125px;
  width: 200vw;
  z-index: -1;
}

.site-wrapper::after {
  background-color: black;
  content: "";
  display: block;
  height: 200vh;
  left: -125px;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: -125px;
  transition: opacity 0.5s ease-out;
  width: 200vw;
  z-index: 1;
}

.site-wrapper.site-wrapper__sausage-reel--active::after {
  opacity: 0.5;
}

@keyframes background-animation {
  from {transform: translate(0, 0)}
  from {transform: translate(120px, 120px)}
}
</style>
