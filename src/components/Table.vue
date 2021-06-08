<template>
  <div class="table__wrapper">
    <div class="table__sidebar">
      <div class="table__sidebar__inner">
        <span>Key Lime Pie</span>
        <span>Chorizo</span>
        <span>Steak</span>
        <span>Aligator</span>
        <span>Hamburger</span>
        <span>Chorizo</span>
        <span>Steak</span>
        <span>Aligator</span>
        <span>Hamburger</span>
        <span>Hamburger</span>
      </div>
    </div>

    <div class="table__data-wrapper">
      <table class="table" cellpadding="0" cellspacing="0">
        <tr class="table__header-wrapper">
          <th>Number</th>
          <th>Rating</th>
          <th>Did It Blow?</th>
          <th>Did It Burst?</th>
          <th>Episode</th>
          <th>Episode Type</th>
          <th>Episode Duration</th>
        </tr>
        <tr>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
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
          <td>Yip Yip</td>
          <td>Yip Yip</td>
        </tr>
        <tr>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
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
          <td>Yip Yip</td>
          <td>Yip Yip</td>
        </tr>
        <tr>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
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
          <td>Yip Yip</td>
          <td>Yip Yip</td>
        </tr>
        <tr>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
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
          <td>Yip Yip</td>
          <td>Yip Yip</td>
        </tr>
        <tr>
          <td>Yip Yip</td>
          <td>Yip Yip</td>
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
  width: 100%;
  overflow: auto;
  white-space: nowrap;
}

.table__sidebar {
  color: white;
  margin-top: 42px;
}

.table__sidebar span {
  display: block;
  white-space: nowrap;
}

.table__wrapper {
  background-color: var(--light-mode-table-bg-color);
  border-radius: 15px;
  display: flex;
  font-family: 'Nunito', 'Arial' , sans-serif;
  max-width: 800px;
  max-height: 459px;
  margin: auto;
  overflow-y: hidden;
  box-shadow: 0 0 15px 0 var(--light-mode-search-bar-submit-bg-color);
}

.table__data-wrapper {
  overflow: auto;
}

th {
  background-color: var(--light-mode-table-bg-color);
  color: white;
}

td,
th {
  border: 0;
  text-align: center;
}

td,
th,
span {
  padding: 10px 20px;
}
</style>
