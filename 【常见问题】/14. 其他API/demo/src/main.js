import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/**
 * 默认 mixins的 created 和 组件的 created 都会执行。这里配置的optionMergeStrategies会影响所有组件
 * @param parent 有混合就是混合的 created，没有就是 undefined
 * @param child 组件的 created
 * @param vm 此处用不上
 * @returns {*|*[]}
 */
Vue.config.optionMergeStrategies.created = function (parent, child, vm) {
  if (!parent) {
    return child;
  }
  if (!child) {
    return parent;
  }
  // return [parent, child]; // 默认情况
  return [child]; // 如果只想运行一个，写一个即可
};

// [Vue warn]: Unknown custom element: <my-ele> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
Vue.config.ignoredElements = [
  // 加上这个配置就不会报错，页面就会解析为 <my-ele></my-ele>
  "my-ele", // 会加入 div、span、a、...、 my-ele 的列表
];

new Vue({
  render: (h) => h(App),
}).$mount("#app");

