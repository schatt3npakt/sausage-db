<template>
  <button class="back-to-top-button">To<br>Top</button>
</template>

<script>
export default {
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
  padding: 20px;
  position: fixed;
  right: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.25s ease-out;
  z-index: 2;
}

.back-to-top-button:active,
.back-to-top-button:hover,
.back-to-top-button:focus {
  background-color: var(--light-mode-button-hover-bg-color);
}
</style>
