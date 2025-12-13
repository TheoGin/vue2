import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const tabsModules = {
  namespaced: true,
  state: {
    pageNames: [],
  },
  strict: true, // 开启严格模式后，只允许通过mutation改变状态，否则 Error: [vuex] do not mutate vuex store state outside mutation handlers.
  mutations: {
    addPage(state, pageName) {
      if (!state.pageNames.includes(pageName)) {
        state.pageNames.push(pageName);
      }
      console.log('state.pageNames', state.pageNames);
    },
    removePage(state, pageName) {
      const indexOf = state.pageNames.indexOf(pageName);
      if (indexOf > -1) {
        state.pageNames.splice(indexOf, 1);
      }
      console.log('state.pageNames', state.pageNames);
    },
  },
  actions: {
    addPage({commit}, pageName) {
      commit("addPage", pageName);
    },
    removePage({commit}, pageName) {
      commit("removePage", pageName);
    },
  },
};

export default new Vuex.Store({
  modules: {
    tabs: tabsModules,
  },
});
