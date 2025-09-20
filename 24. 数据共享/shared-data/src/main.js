import Vue from "vue";
import App from "./App.vue";
import "./style.css";
import store from "./store";

new Vue({
  // 会通过Vue.prototype注入到所有子组件的$store属性
  store,
  render: (h) => h(App),
}).$mount("#app");
