<template>
  <div>
    <div class="sausage-stats">
      <div class="sausage-stats__item">
        <p class="sausage-stats__item__value">{{totalSausages}}</p>
        <p class="sausage-stats__item__message">Sausages made!</p>
      </div>

      <div class="sausage-stats__item">
        <p class="sausage-stats__item__value">{{topRated}}</p>
        <p class="sausage-stats__item__message">Top rated <br/> sausages!</p>
      </div>

      <div class="sausage-stats__item">
        <p class="sausage-stats__item__value">{{sausageBursts}}</p>
        <p class="sausage-stats__item__message">Sausage bursts!</p>
      </div>
    </div>

  <div class="sausage-stats">
    <div class="sausage-stats__item">
      <p class="sausage-stats__item__value">{{sausageBurstRatio}} %</p>
      <p class="sausage-stats__item__message">Burst ratio!</p>
    </div>

    <div class="sausage-stats__item">
      <p class="sausage-stats__item__value">{{streak}}</p>
      <p class="sausage-stats__item__message">No-Burst streak!</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    streak () {
      return this.$store.getters.getStreak;
    },
    sausageBurstRatio () {
      return Math.round(((100 / this.$store.state.sausageData.length) * this.$store.getters.getSausageBursts.length + Number.EPSILON) * 100) / 100
    },
    sausageBursts () {
      return this.$store.getters.getSausageBursts.length
    },
    topRated () {
      return this.$store.getters.getTopRated.length
    },
    totalSausages () {
      return this.$store.state.sausageData.length
    }
  },
  name: 'SausageStats',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sausage-stats {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
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
  width: 190px;
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
