import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
import { titleController } from "@/utils";

Vue.use(VueRouter); // Vue.use(插件)  在Vue中安装插件

const router = new VueRouter({
  // 配置
  mode: "history",
  routes, // 路由匹配规则
  // base: '/news', // 会导致硬编码，要改改两个地方
  base: process.env.BASE_URL, // process.env.BASE_URL会从 vue.config.js 读 publicPath
});
console.log('process.env.BASE_URL', process.env.BASE_URL); // process.env.BASE_URL /news/

// 后置路由守卫
router.afterEach((to, from) => {
  /* console.log(store.state.setting.data); // null 数据还没有请求到
  if (to.meta.title && store.state.setting.data) {
    document.title = to.meta.title + "-" + store.state.setting.data.siteTitle;
  } else {
    document.title = to.meta.title;
  } */
  if (to.meta.title) {
    // document.title = to.meta.title;
    titleController.setRouteTitle(to.meta.title);
  }
});

export default router;
