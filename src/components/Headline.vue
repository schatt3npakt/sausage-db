<template>
  <h1 v-if="tag === 1">{{message}}</h1>
  <h2 v-if="tag === 2">{{message}}</h2>
  <h3 v-if="tag === 3">{{message}}</h3>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    message: String,
    tag: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3 {
  color: var(--light-mode-headline-color);
  font-family: 'Nunito', 'Arial' ,sans-serif;
  margin: 0 0 40px 0;
  text-transform: uppercase;
}

h1,
.display-h1 {
  font-size: 53px;
  line-height: 54px;
  text-align: center;
  -webkit-text-stroke: 3px var(--light-mode-headline-border-color);
  white-space: break-spaces;
}

@media screen and (min-width: 600px) {
  h1,
  .display-h1 {
    white-space: initial;
  }
}

h2,
.display-h2 {
  font-size: 42px;
  line-height: 42px;
  text-align: center;
  -webkit-text-stroke: 2px var(--light-mode-headline-border-color);
}

@media screen and (min-width: 600px) {
  h2,
  .display-h2 {
    line-height: 30px;
  }
}



h3,
.display-h3 {
  font-size: 36px;
  line-height: 36px;
  text-align: center;
}

@media screen and (min-width: 600px) {
  h3,
  .display-h3 {
    line-height: 25px;
  }
}
</style>
