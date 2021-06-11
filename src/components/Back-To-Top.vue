<template>
  <button @click="scrollTop" class="back-to-top-button hide">To<br>Top</button>
</template>

<script>
export default {
  methods: {
    scrollTop: function () {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  },
  mounted: function () {
    let backToTopElement = document.querySelector('.back-to-top-button')
    document.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        backToTopElement.classList.remove('hide')
      } else {
        backToTopElement.classList.add('hide')
      }
    })
  },
  name: 'Back-To-Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back-to-top-button {
  background-color: var(--light-mode-table-bg-color);
  border-radius: 999px;
  border: none;
  bottom: 20px;
  box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito', 'Arial' , sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  opacity: 1;
  padding: 20px;
  position: fixed;
  right: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.25s ease-out, opacity 0.25s ease-out;
  z-index: 2;
}

.back-to-top-button:active,
.back-to-top-button:hover,
.back-to-top-button:focus {
  background-color: var(--light-mode-button-hover-bg-color);
}

.hide {
  pointer-events: none;
  opacity: 0;
}
</style>
