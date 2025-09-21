import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Detail from "@/views/Blog/Detail.vue";

export default [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    // 假如要更改路径，还要改RouterLink，还可能要改其他地方 --> 命名路由
    name: "Blog",
    path: "/article",
    component: Blog,
  },
  {
      name: "BlogDetail",
      path: "/article/:id",
      component: Detail,
  },
  {
    name: "BlogCategory",
    path: "/article/cate/:categoryId",
    component: Blog,
  },
  {
    name: "Message",
    path: "/message",
    component: Message,
  },
  {
    name: "Project",
    path: "/project",
    component: Project,
  },
];
