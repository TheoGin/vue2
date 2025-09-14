import Vue from "vue";
import App from "./App.vue";
import "@/styles/global.less";
import router from "@/router";
import { showMessage } from "@/utils";
import '@/mock';
import VLoading from './directives/loading.js';
import './eventBus';

Vue.directive('loading', VLoading);

/*
window.showMessage = showMessage;
// showMessage("abc", "success");
showMessage({
  content: "abc",
  type: "success",
  callback: () => {
    console.log('消息过渡完成~')
  }
}); */

// 向实例注入成员
Vue.prototype.$showMessage = showMessage;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

/* import eventBus from "@/eventBus";

function handler1(data) {
  console.log("handler1", data);
}

function handler2(data) {
  console.log("hander2", data);
}

window.eventBus = eventBus;
window.handler1 = handler1;
window.handler2 = handler2;

eventBus.$on("event1", handler1);
eventBus.$on("event1", handler2);
eventBus.$on("event2", handler1);

eventBus.$emit("event1", 123); // handler1 123  hander2 123
eventBus.$emit("event2", 123); // handler1 123

eventBus.$off("event1", handler1);
eventBus.$emit("event1", 123); // hander2 123

eventBus.$emit('event1', 123) // handler1 123 hander2 123
// Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy(Vue), _self: Vue, …}

eventBus.$emit('event2', 123) // handler1 123
// Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy(Vue), _self: Vue, …}

eventBus.$off('event1', handler1)
// Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy(Vue), _self: Vue, …}

eventBus.$emit('event1', 123) // hander2 123
// Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy(Vue), _self: Vue, …} */
