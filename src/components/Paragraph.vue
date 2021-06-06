<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    message: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: white;
  font-family: 'Arial' ,sans-serif;
  font-weight: 700;
  hyphens: auto;
  letter-spacing: 0.5px;
  line-height: 1.3;
  margin: 0 0 40px 0;
}
</style>
