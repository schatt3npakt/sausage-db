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
  font-family: 'Nunito', 'Arial' ,sans-serif;
  font-weight: 700;
  font-size: 16px;
  hyphens: auto;
  letter-spacing: 0.5px;
  line-height: 1.3;
  margin: 0 auto 40px auto;
  text-align: center;
  max-width: 800px;
}
</style>
