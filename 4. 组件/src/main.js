// 入口模块文件
// 创建vue实例
import Vue from "./vue.browser.js";
import App from "./App.js";

new Vue({
  /* components: {
    App,
  },
  template: `
        <App />
    `, */
  // 等价于上面
  render: (h) => h(App), // 渲染组件App
}).$mount("#app");
