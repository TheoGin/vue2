import VueRouter from "vue-router";
import routes from "./routes";
import Vue from "vue";
import store from "../store";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  // 判断是否需要 鉴权
  // if(to.fullPath === '/user' || to.fullPath === '/news') {
  // 这样会写死
  if (to.meta.auth) {
    // 需要鉴权判断登录状态
    const status = store.getters["loginUser/status"];
    if (status === "loading") {
      router.push({
        path: "/loading",
        query: {
          returnurl: to.fullPath,
        },
      });
    } else if (status === "login") {
      // 已经登录了，放行
      next();
    } else {
      alert("你还没有登录，请先登录！");
      // 没有登录了，跳到登录页
      // vue-router.esm.js:2054 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/login?returnurl=%2Fnews"
      router
        .push({
          path: "/login",
          query: {
            returnurl: to.fullPath,
          },
        })
        .catch(() => {});
    }
  } else {
    // 不需要鉴权，放行
    next();
  }
});

export default router;
