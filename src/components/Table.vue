<template>

  <div class="table__wrapper">
    <div class="table__sidebar">
      <div class="table__sidebar__inner">
        <span
            class="table__sidebar__name-filter"
            :class="{
                current: (currentSort === 'name') ? 'current' : '',
                asc: (currentSortDir === 'asc') ?  'asc' : ''
              }"
            @click="sort('name')"
        >
          Name
        </span>
        <span
          v-for="entry in sortedSausages"
          :key="entry.id"
          :id="kebabCase(entry.name)"
      >{{ entry.name }}
      </span>
      </div>
    </div>

    <div class="table__data-wrapper">
      <table class="table" cellpadding="0" cellspacing="0">
        <tr class="table__header-wrapper">
          <th
              :class="{
                current: (currentSort === 'id') ? 'current' : '',
                asc: (currentSortDir === 'asc') ?  'asc' : ''
              }"
              @click="sort('id')"
          >Number</th>
          <th
              :class="{
                current: (currentSort === 'rating') ? 'current' : '',
                asc: (currentSortDir === 'asc') ?  'asc' : ''
              }"
              @click="sort('rating')"
          >Rating</th>
          <th
              :class="{
                current: (currentSort === 'dibl') ? 'current' : '',
                asc: (currentSortDir === 'asc') ?  'asc' : ''
              }"
              @click="sort('dibl')"
          >Did It Blow?</th>
          <th
              :class="{
                current: (currentSort === 'dibu') ? 'current' : '',
                asc: (currentSortDir === 'asc') ?  'asc' : ''
              }"
              @click="sort('dibu')"
          >Did It Burst?</th>
          <th
              :class="{
                current: (currentSort === 'episode') ? 'current' : '',
                asc: (currentSortDir === 'asc') ?  'asc' : ''
              }"
              @click="sort('episode')"
          >Episode</th>
          <th
              :class="{
                current: (currentSort === 'episodeType') ? 'current' : '',
                asc: (currentSortDir === 'asc') ?  'asc' : ''
              }"
              @click="sort('episodeType')"
          >Episode Type</th>
          <th
              :class="{
                current: (currentSort === 'episodeLength') ? 'current' : '',
                asc: (currentSortDir === 'asc') ?  'asc' : ''
              }"
              @click="sort('episodeLength')"
          >Episode Length</th>
        </tr>

        <tr
            v-for="entry in sortedSausages"
            :key="entry.id"
        >
          <td>
            <span v-if="entry.id < 10">00{{entry.id}}</span>
            <span v-else-if="entry.id > 9 && entry.id < 99">0{{entry.id}}</span>
            <span v-else>{{entry.id}}</span>
          </td>
          <td>{{ entry.rating }}</td>
          <td>{{ entry.dibl }}</td>
          <td>{{ entry.dibu }}</td>
          <td>
            <a
                :href="`https://www.youtube.com/watch?v=${entry.episodeID}`"
                target="_blank"
                rel="noopener"
            >{{entry.episode}}</a>
          </td>
          <td>{{ entry.episodeType }}</td>
          <td>{{ formatTimestamp(entry.episodeLength) }}</td>
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
      return this.sausages.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return modifier;
        return 0;
      });
    }
  },
  data: function () {
    return {
      currentSort:'id',
      currentSortDir:'asc',
      sausages: this.sausageData
    }
  },
  methods: {
    formatTimestamp: function (timestring) {
      let timeArray = timestring.split(':')

      if (timeArray[0] < 59) {
        return timestring
      }

      let hours = Math.round(timeArray[0] / 60)
      let minutes = timeArray[0] % 60

      return hours + ":" + minutes + ":" + timeArray[1]
    },
    kebabCase: function (string) {
      return string.toLowerCase().replace(/\s+/g, '-')
    },
    sort: function(s) {
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc'
      }
      this.currentSort = s
    }
  },
  mounted: function () {
    tableScroll()
  },
  name: 'Headline',
  props: {
    sausageData: Array,
    message: String,
    tag: Number
  }
}

function tableScroll() {
  let table = document.querySelector(".table__data-wrapper")
  let tableSideBar = document.querySelector(".table__sidebar__inner")

  table.addEventListener('scroll', function () {
    tableSideBar.style.marginTop = (table.scrollTop * -1) + "px"
  })
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
  position: sticky;
  top: 0;
}

.table__sidebar {
  color: white;
  min-width: 240px;
  overflow-y: hidden;
}

.table__sidebar span {
  display: block;
  white-space: nowrap;
}

.table__wrapper {
  background-color: var(--light-mode-table-bg-color);
  border-radius: 15px;
  display: flex;
  font-family: 'Nunito', 'Arial' , sans-serif;
  max-width: 900px;
  max-height: 459px;
  margin: auto;
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
  cursor: pointer;
  position: relative;
}

td,
th {
  border: 0;
}

td span {
  padding: 0;
}

td,
th,
span {
  padding: 10px 20px;
}
</style>
