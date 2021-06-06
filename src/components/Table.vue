<template>
  <div class="table__wrapper">
    <div class="table__sidebar">
      <span>Key Lime Pie</span>
      <span>Chorizo</span>
      <span>Steak</span>
      <span>Aligator</span>
      <span>Hamburger</span>
    </div>

    <div class="table__data-wrapper">
      <div class="table__header">
        <span>Rating</span>
        <span>Did it blow?</span>
        <span>Episode</span>
        <span>Episode Type</span>
        <span>Episode Duration</span>
      </div>
      <table class="table">
        <tr>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
        </tr>
        <tr>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
        </tr>
        <tr>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
        </tr>
      </table>
    </div>
  </div>
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
.table {
  background-color: white;
}

.table__sidebar span {
  display: block;
}

.table__wrapper {
  background-color: var(--light-mode-table-bg-color);
  display: flex;
}
</style>
