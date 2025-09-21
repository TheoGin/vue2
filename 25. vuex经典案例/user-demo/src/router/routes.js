import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import News from "../views/News.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/news",
    component: News,
  },
  { path: "/login", component: Login },
];
