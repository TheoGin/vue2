/*import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Detail from "@/views/Blog/Detail.vue";*/

export default [
  {
    name: "Home",
    path: "/",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Home"),
    meta: {
      title: "首页",
    },
  },
  {
    name: "About",
    path: "/about",
    component: () => import(/* webpackChunkName: "About" */ "@/views/About"),
    meta: {
      title: "关于我",
    },
  },
  {
    // 假如要更改路径，还要改RouterLink，还可能要改其他地方 --> 命名路由
    name: "Blog",
    path: "/article",
    component: () => import(/* webpackChunkName: "Blog" */ "@/views/Blog"),
    meta: {
      title: "文章",
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: () => import(/* webpackChunkName: "BlogDetail" */ "@/views/Blog/Detail.vue"),
    meta: {
      title: "文章详情",
    },
  },
  {
    name: "BlogCategory",
    path: "/article/cate/:categoryId",
    component: () => import(/* webpackChunkName: "Blog" */ "@/views/Blog"),
    meta: {
      title: "文章",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: () => import(/* webpackChunkName: "Message" */ "@/views/Message"),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: () => import(/* webpackChunkName: "Project" */ "@/views/Project"),
    meta: {
      title: "项目&效果",
    },
  },
];
