import { createStore } from 'vuex';

export default createStore({
  state: {
    sausageData: []
  },
  getters: {
    getSausageIndexes (state) {
      return state.sausageData.map(elem => elem.type)
    },
    getDibl (state) {
      return state.sausageData.map(elem => {
        switch (elem.dibl) {
          case "6/5 Mark Ruffalos":
            return 6;
          case "5.5/5 Mark Ruffalos":
            return 5.5;
          case "5/5 Mark Ruffalos":
            return 5;
          case "4.5/5 Mark Ruffalos":
            return 4.5;
          case "4/5 Mark Ruffalos":
            return 4;
          case "3,5/5 Mark Ruffalos":
            return 3.5;
          case "3/5 Mark Ruffalos":
            return 3;
          case "2.5/5 Mark Ruffalos":
            return 2.5;
          case "2/5 Mark Ruffalos":
            return 2;
          case "1.5/5 Mark Ruffalos":
            return 1.5;
          case "1/5 Mark Ruffalos":
          case "Yes (No Rating)":
            return 1;
          case "0.5/5 Mark Ruffalos":
            return 0.5;
          default:
            return 0;
        }
      })
    },
    getSausageRatings (state) {
      return state.sausageData.map(elem => {
        switch (elem.rating) {
          case "6/5":
            return 6;
          case "5.5/5":
            return 5.5;
          case "5/5":
            return 5;
          case "4.5/5":
            return 4.5;
          case "4/5":
            return 4;
          case "3,5/5":
            return 3.5;
          case "3/5":
            return 3;
          case "2.5/5":
            return 2.5;
          case "2/5":
            return 2;
          case "1.5/5":
            return 1.5;
          case "1/5":
            return 1;
          case "0.5/5":
            return 0.5;
          default:
            return false;
        }
      })
    },
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
