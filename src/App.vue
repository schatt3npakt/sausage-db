<template>
  <div class="site-wrapper">
    <Headline :tag="1" />
    <Headline :tag="2" />
    <Headline :tag="3" />

    <Table />
  </div>
</template>

<script>
import Headline from './components/Headline.vue'
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Headline,
    Table
  }
}
</script>

<style>
html {
  background: rgb(1,190,241);
  background: linear-gradient(0deg, rgba(1,190,241,1) 0%, rgba(101,224,249,1) 100%);
  background-size: 100% 100%;
}
</style>
