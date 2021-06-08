<template>
  <div class="searchbar">
    <label class="searchbar__label" for="sausage-search">Search for a sausage name</label>

    <input class="searchbar__input" type="text" name="sausage-search" id="sausage-search"  placeholder="SEARCH THOSE SAUSAGES!"/>

    <button class="searchbar__submit">Search</button>
  </div>
</template>

<script>
export default {
  name: 'Searchbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbar {
  box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
  display: flex;
  margin: 40px auto;
  max-width: 400px;
}

.searchbar__input {
  border-radius: 15px 0 0 15px;
  font-family: 'Nunito', 'Arial' ,sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  padding: 20px;
  width: 300px;
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
  background-color: var(--light-mode-search-bar-submit-bg-color);
  border-radius: 0 15px 15px 0;
  border: none;
  color: transparent;
  cursor: pointer;
  display: block;
  height: 59px;
  margin: 0;
  padding: 0;
  position: relative;
  width: 59px;
  font-size: 0;
  text-indent: -9999px;
  transition: background-color 0.25s ease-out;
}

.searchbar__submit:active,
.searchbar__submit:hover,
.searchbar__submit:focus {
  background-color: var(--light-mode-button-hover-bg-color);
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
</style>
