<template>
  <div class="sausage-stats">
    <div class="sausage-stats__item"  v-for="item in items" :key="item.id">
      <p class="sausage-stats__item__value">{{item.value}}</p>
      <p class="sausage-stats__item__message">{{item.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SausageStats',
  props: {
    items: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sausage-stats {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

.sausage-stats:not(:first-of-type) {
  margin-top: 30px;
}

.sausage-stats__item {
  color: white;
  font-family: 'Nunito', 'Arial' ,sans-serif;
  font-weight: 700;
  hyphens: auto;
  letter-spacing: 1px;
  line-height: 1.3;
  padding: 0 15px;
  text-align: center;
  text-transform: uppercase;
}

.sausage-stats__item__value {
  font-size: 38px;
  margin: 0 0 10px 0;
}

.sausage-stats__item__message {
  font-size: 16px;
  margin: 0;
  white-space: break-spaces;
}
</style>
