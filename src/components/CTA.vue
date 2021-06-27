<template>
  <div class="cta">
    <a class="cta__button" :href="link" target="_blank" rel="noopener">{{message}}</a>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    message: String,
    link: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cta {
  text-align: center;
}

.cta__button {
  background-color: var(--light-mode-table-bg-color);
  border-radius: 15px;
  box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
  color: white;
  display: inline-block;
  font-family: 'Nunito', 'Arial' , sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 auto 30px auto;
  padding: 20px 30px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}

.cta__button:active,
.cta__button:hover,
.cta__button:focus {
  background-color: var(--light-mode-button-hover-bg-color);
}

.cta__button:active {
  transform: scale(0.98);
}
</style>
