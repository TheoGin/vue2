import { getBanners } from "@/api/banner";

export default {
  namespaced: true,
  state: {
    data: [],
    loading: false,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchBanner(ctx) {
      if (ctx.state.data.length) {
        // 首页标语banner网络只请求一次，有数据不再请求
        return;
      }
      ctx.commit("setLoading", true);

      const resp = await getBanners();
      ctx.commit("setData", resp);

      ctx.commit("setLoading", false);
    },
  },
};
