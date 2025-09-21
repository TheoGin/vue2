import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 一开始进入应用的时候需要看有没有登录
store.dispatch("loginUser/whoAmI");

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
