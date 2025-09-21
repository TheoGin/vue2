import Vuex from "vuex";
import Vue from "vue";
import loginUser from "@/store/loginUser";
import counter from "@/store/counter";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 分模块
  modules: {
    loginUser,
    counter,
  },
  strict: true, // 开启严格模式后，只允许通过mutation改变状态，否则Error: [vuex] do not mutate vuex store state outside mutation handlers.
});

// 测试
window.store = store;

export default store;
