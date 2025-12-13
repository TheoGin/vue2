import Vue from "vue";
import VueRouter from "vue-router";
import Page1 from "@/components/Page1.vue";
import Page2 from "@/components/Page2.vue";
import Page3 from "@/components/Page3.vue";

Vue.use(VueRouter);

export default new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/page1",
      name: Page1.name,
      // name: "Page1",
      component: Page1,
    },
    {
      path: "/page2",
      name: Page2.name,
      // name: "Page2",
      component: Page2,
    },
    {
      path: "/page3",
      name: Page3.name,
      // name: "Page3",
      component: Page3,
    },
  ],
});
