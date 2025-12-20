import Vue from "vue";

/**
 * 获取某个组件渲染的Dom根元素
 * @param {import("vue").Component} comp 组件
 * @param {属性对象} props
 */
export default function getComponentRootDom(comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, { props }),
  });

  vm.$mount();
  return vm.$el;
}
