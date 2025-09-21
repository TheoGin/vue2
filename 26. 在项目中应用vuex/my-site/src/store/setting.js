import { getSetting } from "@/api/setting";
import { titleController } from "@/utils";

export default {
  namespaced: true,
  state: {
    data: null,
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
    async fetchSetting(ctx) {
      ctx.commit("setLoading", true);

      const resp = await getSetting();

      ctx.commit("setData", resp);

      ctx.commit("setLoading", false);

      // <link rel="shortcut icon" type="images/x-icon" href="http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f">
      if (resp.favicon) {
        let link = document.querySelector("link[rel='shortcut icon']");
        if (link) {
          return;
        }
        link = document.createElement("link");
        link.rel = "shortcut icon";
        link.type = "images/x-icon";
        // link.href = ctx.state.data.favicon;
        link.href = resp.favicon;
        document.querySelector("head").appendChild(link);
      }

      if(resp.siteTitle) {
        // document.title += "-" + resp.siteTitle;
        titleController.setSiteTitle(resp.siteTitle);
      }
    },
  },
};
