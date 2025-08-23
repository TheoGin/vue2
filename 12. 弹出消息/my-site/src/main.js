import Vue from "vue";
import App from "./App.vue";
import "@/styles/global.less";
import router from "@/router";
import { showMessage } from "@/utils";

window.showMessage = showMessage;
// showMessage("abc", "success");
showMessage({
  content: "abc",
  type: "success",
  callback: () => {
    console.log('消息过渡完成~')
  }
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
