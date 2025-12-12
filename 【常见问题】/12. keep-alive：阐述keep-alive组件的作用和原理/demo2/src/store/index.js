import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const index = new Vuex.Store({
  state: {
    tabs: [],
  },
  strict: true, // 开启严格模式后，只允许通过mutation改变状态，否则 Error: [vuex] do not mutate vuex store state outside mutation handlers.
  mutations: {
    addPage(state, payload) {
      state.tabs = payload;
    },
  },
});