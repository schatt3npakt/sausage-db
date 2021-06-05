<template>
  <h1 v-if="tag === 1">TEST!</h1>
  <h2 v-if="tag === 2">TEST2!</h2>
  <h3 v-if="tag === 3">TEST3!</h3>
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

</style>
