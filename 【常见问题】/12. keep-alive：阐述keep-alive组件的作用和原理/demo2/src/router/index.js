import Vue from "vue";
import VueRouter from "vue-router";
import Page1 from "@/components/Page1.vue";
import Page2 from "@/components/Page2.vue";
import Page3 from "@/components/Page3.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/page1",
      name: Page1.name,
      component: Page1,
    },
    {
      path: "/page2",
      name: Page2.name,
      component: Page2,
    },
    {
      path: "/page3",
      name: Page3.name,
      component: Page3,
    },
  ],
});
