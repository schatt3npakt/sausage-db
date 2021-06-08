<template>
  <div class="cta">
    <a class="cta__button" href="{{link}}" rel="noopener">{{message}}</a>
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
    display: inline-block;
    padding: 20px 30px;
    font-family: 'Nunito', 'Arial' , sans-serif;
    font-weight: 700;
    text-decoration: none;
    margin: auto;
    background-color: var(--light-mode-table-bg-color);
    color: white;
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: 2px;
    border-radius: 15px;
    box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
    transition: background-color 0.25s ease-out;
  }

  .cta__button:active,
  .cta__button:hover,
  .cta__button:focus {
    background-color: var(--light-mode-button-hover-bg-color);
  }
</style>
