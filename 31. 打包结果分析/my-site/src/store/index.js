// import Vuex from "vuex";
// 使用具名导入，以便 tree shaking
import { Store } from "vuex";
import Vue from "vue";
import setting from "./setting";
import banner from "./banner";
import about from "./about";
import project from "@/store/project";

if (!window.Vuex) {
  Vue.use(Vuex);
}

// export default new Vuex.Store({
export default new Store({
  modules: {
    setting,
    banner,
    about,
    project,
  },
});
