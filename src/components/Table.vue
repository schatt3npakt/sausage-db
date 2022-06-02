<template>
  <div class="table__wrapper">
    <div class="table__sidebar">
      <div class="table__sidebar__inner">
        <span
          class="table__sidebar__name-filter"
          :class="{
            current: currentSort === 'type' ? 'current' : '',
            asc: currentSortDir === 'asc' ? 'asc' : '',
          }"
          @click="sort('type')"
        >
          Type
        </span>
        <span
          v-for="entry in sortedSausages"
          class="table__sidebar__item"
          :key="entry.id"
          :id="kebabCase(entry.type) + '-sidebar'"
          >{{ entry.type }}
        </span>
      </div>
    </div>

    <div class="table__data-wrapper" id="madeTable">
      <table class="table" cellpadding="0" cellspacing="0">
        <tr class="table__header-wrapper">
          <th
            class="type-mobile"
            :class="{
              current: currentSort === 'type' ? 'current' : '',
              asc: currentSortDir === 'asc' ? 'asc' : '',
            }"
            @click="sort('type')"
          >
            Type
          </th>
          <th
            :class="{
              current: currentSort === 'id' ? 'current' : '',
              asc: currentSortDir === 'asc' ? 'asc' : '',
            }"
            @click="sort('id')"
          >
            Number
          </th>
          <th
            :class="{
              current: currentSort === 'rating' ? 'current' : '',
              asc: currentSortDir === 'asc' ? 'asc' : '',
            }"
            @click="sort('rating')"
          >
            Rating
          </th>
          <th
            :class="{
              current: currentSort === 'dibl' ? 'current' : '',
              asc: currentSortDir === 'asc' ? 'asc' : '',
            }"
            @click="sort('dibl')"
          >
            Did It Blow?
          </th>
          <th
            :class="{
              current: currentSort === 'dibu' ? 'current' : '',
              asc: currentSortDir === 'asc' ? 'asc' : '',
            }"
            @click="sort('dibu')"
          >
            Did It Burst?
          </th>
          <th
            :class="{
              current: currentSort === 'episode' ? 'current' : '',
              asc: currentSortDir === 'asc' ? 'asc' : '',
            }"
            @click="sort('episode')"
          >
            Episode
          </th>
          <th
            :class="{
              current: currentSort === 'episodeType' ? 'current' : '',
              asc: currentSortDir === 'asc' ? 'asc' : '',
            }"
            @click="sort('episodeType')"
          >
            Episode Type
          </th>
          <th
            :class="{
              current: currentSort === 'episodeLength' ? 'current' : '',
              asc: currentSortDir === 'asc' ? 'asc' : '',
            }"
            @click="sort('episodeLength')"
          >
            Episode Length
          </th>
          <th
            :class="{
              current: currentSort === 'song' ? 'current' : '',
              asc: currentSortDir === 'asc' ? 'asc' : '',
            }"
            @click="sort('song')"
          >
            Mr. Sausage Sings
          </th>
        </tr>

        <tr
          class="table__row"
          v-for="entry in sortedSausages"
          :key="entry.id"
          :id="kebabCase(entry.type)"
        >
          <td class="type-mobile">
            {{ entry.type }}
          </td>
          <td>
            <span v-if="entry.id < 10">00{{ entry.id }}</span>
            <span v-else-if="entry.id > 9 && entry.id < 100"
              >0{{ entry.id }}</span
            >
            <span v-else>{{ entry.id }}</span>
          </td>
          <td>
            <span v-if="entry.rating === -1">Disqualified</span>
            <span v-else>{{ entry.rating }}/5</span>
          </td>
          <td>
            <span v-if="entry.dibl === -3">Not Done</span>
            <span v-else-if="entry.dibl === -2">No (No Rating)</span>
            <span v-else-if="entry.dibl === -1">Yes (No Rating)</span>
            <span v-else-if="entry.dibl === 0">0/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 0.5">0.5/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 1">1/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 1.5">1.5/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 2">2/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 2.5">2.5/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 3">3/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 3.5">3.5/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 4">4/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 4.5">4.5/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 5">5/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 5.5">5.5/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 6">6/5 Mark Ruffalos</span>
            <span v-else-if="entry.dibl === 6.5">6.5/5 Mark Ruffalos</span>
            <span v-else>{entry.dibl}</span>
          </td>
          <td>
            <span v-if="entry.dibu === 0">No</span>
            <span v-else>Yes</span>
          </td>
          <td>
            <a
              :href="`https://www.youtube.com/watch?v=${entry.episodeID}`"
              target="_blank"
              rel="noopener"
              >{{ entry.episode }}</a
            >
          </td>
          <td>
            <span v-if="entry.episodeType === 0">Collaboration</span>
            <span v-else-if="entry.episodeType === 1">Holiday Special</span>
            <span v-else-if="entry.episodeType === 2"
              >Livestream Recording</span
            >
            <span v-else-if="entry.episodeType === 3">Milestone Special</span>
            <span v-else-if="entry.episodeType === 4">Other</span>
            <span v-else-if="entry.episodeType === 5">Should You Buy It?</span>
            <span v-else-if="entry.episodeType === 6">Standard</span>
            <span v-else-if="entry.episodeType === 7"
              >YouTube Celebrity Special</span
            >
            <span v-else-if="entry.episodeType === 8"
              >YouTube Comments Suggestions</span
            >
            <span v-else-if="entry.episodeType === 9">Tier List</span>
            <span v-else>{entry.episodeType}</span>
          </td>
          <td>{{ entry.episodeLength }}</td>
          <td>
            {{ entry.song }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// Sorting: https://www.raymondcamden.com/2018/02/08/building-table-sorting-and-pagination-in-vuejs

export default {
  computed: {
    sortedSausages: function() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.sausages.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return modifier;
        return 0;
      });
    }
  },
  data: function() {
    return {
      currentSort: "id",
      currentSortDir: "desc",
      sausages: this.sausageData
    };
  },
  methods: {
    kebabCase: function(string) {
      return string.toLowerCase().replace(/\s+/g, "-");
    },
    sort: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    }
  },
  mounted: function() {
    tableScroll();
  },
  name: "Headline",
  props: {
    sausageData: Array,
    message: String,
    tag: Number
  }
};

function tableScroll() {
  let table = document.querySelector(".table__data-wrapper");
  let tableSideBar = document.querySelector(".table__sidebar__inner");

  table.addEventListener("scroll", function() {
    tableSideBar.style.marginTop = table.scrollTop * -1 + "px";
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  background-color: white;
  width: 100%;
  overflow: auto;
  position: relative;
  white-space: nowrap;
}

.table__header-wrapper {
  left: -1px;
  position: sticky;
  top: -1px;
}

.table__sidebar {
  color: white;
  display: none;
}

@media (min-width: 600px) {
  .table__sidebar {
    display: block;
    min-width: 400px;
  }
}

.table__sidebar span {
  display: block;
  white-space: nowrap;
}

.table__sidebar span.is-current {
  animation-name: highlightSidebar;
  animation-duration: 0.5s;
  animation-iteration-count: 7;
}

.table__wrapper {
  background-color: var(--light-mode-table-bg-color);
  border-radius: 15px;
  display: flex;
  font-family: "Nunito", "Arial", sans-serif;
  max-width: 1100px;
  max-height: 459px;
  margin: 0 auto 60px auto;
  overflow-y: hidden;
  box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
}

.table__data-wrapper {
  overflow: auto;
}

th {
  background-color: var(--light-mode-table-bg-color);
  color: white;
  cursor: pointer;
  position: relative;
  text-align: left;
}

th::after {
  display: none;
}

th.current::after,
.table__sidebar__name-filter.current::after {
  border-bottom: 10px solid white;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  content: "";
  display: block;
  position: absolute;
  right: 5px;
  top: 38%;
  transition: transform 0.25s ease-out;
}

th.current:not(.asc)::after,
.table__sidebar__name-filter:not(.asc)::after {
  transform: rotate(-180deg);
}

.table__sidebar__name-filter {
  background-color: var(--light-mode-table-bg-color);
  cursor: pointer;
  position: sticky;
  top: 0;
}

td,
th {
  border: 0;
}

td span {
  padding: 0;
}

td a {
  color: black;
}

td,
th,
span {
  font-size: 10px;
  padding: 10px 20px;
}

@media (min-width: 600px) {
  td,
  th,
  span {
    font-size: 14px;
  }
}

tr.is-current {
  animation-name: highlightRow;
  animation-duration: 0.5s;
  animation-iteration-count: 7;
}

.type-mobile {
  display: block;
}

@media (min-width: 600px) {
  .type-mobile {
    display: none;
  }
}

@keyframes highlightRow {
  0% {
    background-color: rgb(255, 255, 255);
  }

  50% {
    background-color: rgb(235, 235, 235);
  }

  100% {
    background-color: rgb(255, 255, 255);
  }
}

@keyframes highlightSidebar {
  0% {
    background-color: #084361;
  }

  50% {
    background-color: #0b4f72;
  }

  100% {
    background-color: #084361;
  }
}
</style>
