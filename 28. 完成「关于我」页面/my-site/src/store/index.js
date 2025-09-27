import Vuex from "vuex";
import Vue from "vue";
import setting from "./setting";
import banner from "./banner";
import about from "./about";
import project from "@/store/project";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    setting,
    banner,
    about,
    project,
  },
});
