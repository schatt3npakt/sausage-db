<template>
  <div class="site-wrapper">
    <BackToTop />

    <section>
      <Headline
          message="The Sausage Database"
          :tag="1"
      />

      <Paragraph
          message="Mauris blandit aliquet elit, eget tincidunt nib pulvinar a.
          Vivamus suscipit tortor eget felis porttitor volutpat.
          Proin eget tortor risus."
      />

      <Paragraph
          message="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
      />

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
    </section>

    <Divider />

    <section>
      <Headline
          message="Made Sausages"
          :tag="2"
      />

      <Table/>
    </section>

    <Divider />

    <section>
      <Headline
          message="Another Block"
          :tag="2"
      />

      <Paragraph message="Testoaasfsdfsdgsdg" />

      <CTA
          message="test"
          link="test"
      />
    </section>

    <Divider />

    <section>
      <Headline
          message="Another Block"
          :tag="2"
      />

      <Paragraph message="Testoaasfsdfsdgsdg" />

      <VideoSlider
          :videos="videos"
      />
    </section>
  </div>
</template>

<script>
import BackToTop from "./components/Back-To-Top";
import CTA from "./components/CTA";
import Divider from "./components/Divider";
import Headline from './components/Headline.vue'
import Paragraph from "./components/Paragraph"
import SausageStats from "./components/SausageStats";
import Searchbar from "./components/Searchbar";
import Table from './components/Table.vue'
import VideoSlider from "./components/VideoSlider";

export default {
  name: 'App',
  components: {
    VideoSlider,
    BackToTop,
    CTA,
    Divider,
    Headline,
    Paragraph,
    SausageStats,
    Searchbar,
    Table
  },
  data: function() {
    return {
      sausageStats: [
        {id: 0, value: "364", message: "Sausages made"},
        {id: 1, value: "14", message: "Something Something"},
        {id: 2, value: "23", message: "No-Burst-Streak"}
      ],
      videos: [
        {id: 0, videoID: "nLheOsNHVTY"},
        {id: 1, videoID: "nLheOsNHVTY"},
        {id: 2, videoID: "nLheOsNHVTY"}
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

html,
body {
  background-color: var(--light-mode-bg-color);
  margin: 0;
  padding: 0;
}

.site-wrapper {
  margin: 50px auto;
  max-width: 1440px;
  padding: 0 10px;
}

@media screen and (min-width: 600px) {
  .site-wrapper {
    margin: 50px auto;
    max-width: 1440px;
    padding: 0 25px;
  }
}
</style>
