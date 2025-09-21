import Vuex from "vuex";
import Vue from "vue";
import setting from "./setting";
import banner from "./banner";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    setting,
    banner,
  },
});
