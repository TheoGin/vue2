import { login, loginOut, whoAmI } from "../api/user";

export default {
  namespaced: true, // 开启命名空间需要加前缀 loginUser/
  state: {
    user: null,
    loading: false, // 是否正在登录中
  },
  // 计算属性
  getters: {
    status(state) {
      if (state.loading) {
        // 正在登录中...
        return "loading";
      } else if (state.user) {
        // 已登录
        return "login";
      } else {
        // 未登录
        return "unlogin";
      }
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    // ctx：表示当前这个模块对象，不一定是 store
    async login(ctx, payload) {
      ctx.commit("setLoading", true);

      const resp = await login(payload.loginId, payload.loginPwd);
      ctx.commit("setUser", resp);

      ctx.commit("setLoading", false);

      return resp;
    },
    async loginOut(ctx) {
      ctx.commit("setLoading", true);

      await loginOut();
      ctx.commit("setUser", null);

      ctx.commit("setLoading", false);
    },
    async whoAmI(ctx) {
      ctx.commit("setLoading", true);

      const resp = await whoAmI();
      ctx.commit("setUser", resp);

      ctx.commit("setLoading", false);
    },
  },
};
