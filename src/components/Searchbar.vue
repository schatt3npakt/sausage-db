<template>
  <div class="searchbar__wrapper">
    <div class="searchbar">
      <label class="searchbar__label" for="sausage-search">Search for a sausage name</label>

      <form class="searchbar__form" @submit.prevent="scrollToAnchor(firstSearchResult)">
        <input class="searchbar__input" v-model="searchBarValue" type="text" name="sausage-search" id="sausage-search"  placeholder="SEARCH THOSE SAUSAGES!">
      </form>

      <button class="searchbar__submit" :class="{
        isActive: (searchBarValue.length >= 2) ? 'isActive' : ''
      }" @click="scrollToAnchor(firstSearchResult)">Search</button>
    </div>

    <div class="searchbar__results" :class="{hidden: searchBarValue.length <= 1}">
      <a
          :class="{selected: index === 0}"
          v-for="(entry, index) in filteredArray"
          @click="scrollToAnchor(kebabCase(entry.type))"
          :key="entry.id">{{entry.type}}</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    computedSearchbarValue: function () {
      return this.kebabCase(this.searchBarValue)
    },
    filteredArray: function () {
      return this.$store.getters.allData.slice().filter(entry => entry.type.toLowerCase().includes(this.lowerCaseSearchBarValue))
    },
    firstSearchResult: function () {
      return this.kebabCase(this.filteredArray[0].type)
    },
    lowerCaseSearchBarValue: function () {
      return this.searchBarValue.toLowerCase()
    }
  },
  data: function () {
    return {
      searchBarValue: ""
    }
  },
  methods: {
    kebabCase: function (string) {
      return string.toLowerCase().replace(/\s+/g, '-')
    },
    scrollToAnchor: function (id) {
      if (this.searchBarValue.length <= 1) {
        return
      }

      let target = document.getElementById(id)
      let targetSidebar = document.getElementById(id + "-sidebar")
      let tableRowItems = document.getElementsByClassName("table__row")
      let sidebarItems = document.getElementsByClassName("table__sidebar__item")

      for (let item of sidebarItems) {
        item.classList.remove("is-current")
      }

      for (let item of tableRowItems) {
        item.classList.remove("is-current")
      }

      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      })
      target.classList.add('is-current')
      targetSidebar.classList.add('is-current')
    }
  },
  name: 'Searchbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbar {
  display: flex;
  margin: 40px auto;
  max-width: 350px;
}

@media (min-width: 600px) {
  .searchbar {
    max-width: 400px;
  }
}

.searchbar__form {
  box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
  height: 56px;
  position: relative;
}

.searchbar__input {
  border-radius: 15px 0 0 15px;
  border: none !important;
  font-family: 'Nunito', 'Arial' ,sans-serif;
  font-size: 16px;
  font-weight: 700;
  display: block;
  width: 250px;
  padding: 18px;
}

@media (min-width: 600px) {
  .searchbar__input {
    width: 300px;
  }
}

.searchbar__input:active,
.searchbar__input:focus {
  outline: none;
}

.searchbar__label {
  color: transparent;
  font-size: 0;
  opacity: 0;
  text-indent: -9999px;
}

.searchbar__submit {
  background-color: #acacac;
  border-radius: 0 15px 15px 0;
  border: none;
  color: transparent;
  cursor: not-allowed;
  display: block;
  height: 58px;
  margin: 0;
  padding: 0;
  position: relative;
  width: 59px;
  font-size: 0;
  text-indent: -9999px;
  transition: background-color 0.25s ease-out;
}

.searchbar__submit.isActive:active,
.searchbar__submit.isActive:hover,
.searchbar__submit.isActive:focus {
  background-color: var(--light-mode-button-hover-bg-color);
  border: none;
}

.searchbar__submit::before {
  content: "";
  display: block;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kb9LQlEUxz9pvyjDoIaGBolq0jADq6VBKQuqwQyyWvT5K1B7vGdEtAatQkHU0q+h/oJag+YgKIog2oLmopaS13kqKJH3cu/53O8953DuuWAJpZWMXu+GTDanBQM+x0J40dH0SqPMVoZpjyi6OjM3EaLm+HqgzrR3LjNXbb9/R2ssritQ1yw8pqhaTnhSeHo9p5q8K9yppCIx4XNhpyYFCt+berTEbyYnS/xjshYK+sHSLuxIVnG0ipWUlhGWl9ObSa8p5XrMl9ji2fk5sT2yutEJEsCHgynG8eNlkFHZvbjwMCAnasS7i/GzrEqsIrvKBhorJEmRwynqmmSPi02IHpeZZsPs/9++6okhTym7zQcNL4bx0QdNO1DIG8b3sWEUTsD6DFfZSvzqEYx8ip6vaL2HYN+Ci+uKFt2Dy23oelIjWqQoWWVZEgl4P4O2MHTcQstSqWfle04fIbQpX3UD+wfQL/725V9gjGfjDeH1UQAAAAlwSFlzAABAlwAAQJcB4JfUOwAAAc9JREFUSImtlb9LVWEYx7/PVYOGEnS44ZBDJEIIgia1KTqKY9buH9Cq0OIU7o4totbW0lYu1qCoOLS0qKlxFbRAFMSkPg7nXnp4zznvOZJfuPC+z/t9vt/neX+ca4oAqErqr/86JX2VtC5p08zOYrlRAD3AGvn4CywAbdcVbgamgN8RcY8DYDSmaYHBoqQXLnQpaU3JttQkdUt6LOlRoDNhZm+Kqn8WVLcKdOdwx4BDxz0FOmPiVeDYJcwDzQUFtQPfXM4SUMkjv3bEPaA12u6/vCfAH5c7EnIajgMuNmlmJ2UMzGxF0pwLDYScSr2tPhf7XEbc4Ysb96dWgYeuxSPAUqQIgF6XvxuuVyRduHmLgqtbArfc+CJcrEjal3Rcn7dKenBNA78tGykDM0PJQ2ogdRMKMOzG65kM4JXbx19ARxllYDR4nE/ziHeAHUf8CNwtEO8Cai7nfVE1g0E1u8BIeKuAJuAlcO6458B34H6RyQxpHAIfgFlgGTgL1v1L3ipjMg78zDDKwo+MWCmTe8A7kq9kFg6AaeA28DZmEn1UJJ+RLgV/mWZW82ciaV7S8yB9W9JQtJOyIDn4rE4+3YhBjknxWfyHyc2LBybVxvwKyO294aAa7BIAAAAASUVORK5CYII=");
  background-size: 100% 100%;
  height: 25px;
  width: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.searchbar__submit.isActive {
  background-color: var(--light-mode-search-bar-submit-bg-color);
  cursor: pointer;
  pointer-events: auto;
}

.searchbar__wrapper {
  margin: auto;
  max-width: 400px;
  position: relative;
}

.searchbar__results {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
  height: 200px;
  left: 0;
  max-width: 400px;
  overflow-y: auto;
  position: absolute;
  top: 65px;
  transition: height 0.25s ease-out;
  width: 100%;
  z-index: 3;
}

.searchbar__results.hidden {
  height: 0;
}

.searchbar__results a {
  color: black;
  cursor: pointer;
  display: block;
  font-family: 'Nunito', 'Arial' , sans-serif;
  font-weight: 700;
  padding: 10px 20px;
  transition: background-color 0.25s ease-out;
}

.searchbar__results a:hover,
.searchbar__results a:focus {
  background-color: #e5e5e5;
}

.searchbar__results:not(:hover) a.selected {
  background-color: #e5e5e5;
}
</style>
