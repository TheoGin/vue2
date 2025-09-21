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
  /** 每当导航切换时（包含刷新页面的第一次），该函数会运行
    * from：之前的路由对象  (this.$route)
    * to: 即将进入的路由对象 (this.$route)
    * next: 确认导航的一个函数  调用该函数（无参），就会直接进入to， 调用该函数（传入参数），根据传入参数进入新的导航
  */
 
  // 判断是否需要 鉴权
  // if(to.fullPath === '/user' || to.fullPath === '/news') {
  // 这样会写死
  if (to.meta.auth) {
    // 需要鉴权判断登录状态
    const status = store.getters["loginUser/status"];
    if (status === "loading") {
      // 加载中，无法确定是否已经登录
      // router.push({
      next({
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
      // router.push({
      next({
          path: "/login",
          query: {
            returnurl: to.fullPath,
          },
        });
    }
  } else {
    // 不需要鉴权，放行
    next();
  }
});

export default router;
