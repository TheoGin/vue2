import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex); // 应用vuex插件

function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const store = new Vuex.Store({
  state: {
    count: 0, // 默认值为0
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
    // payload：负荷  负载
    power(state, payload) {
      state.count **= payload;
    },
  },
  actions: {
    async asyncIncrease(ctx) {
      await delay();
      ctx.commit("increase");
    },
    async asyncDecrease(ctx) {
      await delay();
      ctx.commit("decrease");
    },
    async asyncPower(ctx, payload) {
      await delay();
      ctx.commit("power", payload);
    },
  },
});

// 测试
window.store = store;

export default store;
