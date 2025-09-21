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
});

window.store = store;

export default store;
