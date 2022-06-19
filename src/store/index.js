import { createStore } from 'vuex';

export default createStore({
  state: {
    sausageData: []
  },
  getters: {
    getStreak (state) {
      const didBurst = (elem) => elem.dibu === 1

      return state.sausageData.slice().reverse().findIndex(didBurst);
    },
    getSausageBursts (state) {
      const burstValues = [1]

      function didBurst (value) {
        if (!value.dibu) {
          return
        }

        return burstValues.includes(value.dibu)
      }

      return state.sausageData.filter(didBurst)
    },
    getTopRated (state) {
      const topRatings = ['5/5', '6/5']

      function isTopRated (value) {
        if (!value.rating) {
          return
        }

        return topRatings.includes(value.rating)
      }

      return state.sausageData.filter(isTopRated)
    },
    getLatestVideos (state) {
      return state.sausageData.slice(-5).reverse()
    }
  },
  mutations: {
    updateSausageData (state, newArray) {
      state.sausageData = newArray
    }
  },
  actions: {},
  modules: {}
});
