<template>
  <div class="site-wrapper">
    <section>
      <Headline
          message="The Sausage Database"
          :tag="1"
      />

      <Paragraph
          message="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
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

    <Headline
        message="Made Sausages"
        :tag="2"
    />

    <Table/>
  </div>
</template>

<script>
import Divider from "./components/Divider";
import Headline from './components/Headline.vue'
import Paragraph from "./components/Paragraph"
import SausageStats from "./components/SausageStats";
import Searchbar from "./components/Searchbar";
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
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
        {id: 0, value: "364", message: "Sausages created"},
        {id: 1, value: "142", message: "Something something"},
        {id: 2, value: "999", message: "Another something"}
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
