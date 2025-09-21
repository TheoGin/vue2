import Home from "../views/Home.vue";
import Loading from "../views/Loading.vue";
import Login from "../views/Login.vue";
import News from "../views/News.vue";
import PersonalUser from "../views/PersonalUser.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/news",
    component: News,
    meta: {
      auth: true,
    },
  },
  { path: "/login", component: Login },
  { path: "/loading", component: Loading },
  {
    path: "/user",
    component: PersonalUser,
    meta: {
      auth: true,
    },
  },
];
