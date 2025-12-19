/*import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Detail from "@/views/Blog/Detail.vue";*/
import { start, done, configure } from 'nprogress'
import 'nprogress/nprogress.css'

configure({
  showSpinner: false,
  trickleSpeed: 20,
})

// window.start = start
// window.done = done

function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

/**
 * 不能传递 path 或 import(...)，不然会当做表达式，分包就无效了
 * @param { Function } pageCompResolver
 */
// async function getAsyncComponent(pageCompResolver) { // 这里不需要写 async
function getAsyncComponent(pageCompResolver) {
  return async () => {
    if (process.env.NODE_ENV === 'development') {
      await delay();
    }
    // console.log("加载前");
    start();
    const comp = await pageCompResolver();
    // console.log("加载后");
    done()
    return comp;
  }
}

export default [
  {
    name: "Home",
    path: "/",
    component: getAsyncComponent(() => import(/* webpackChunkName: "Home" */ "@/views/Home")),
    meta: {
      title: "首页",
    },
  },
  {
    name: "About",
    path: "/about",
    component: getAsyncComponent(() => import(/* webpackChunkName: "About" */ "@/views/About")),
    meta: {
      title: "关于我",
    },
  },
  {
    // 假如要更改路径，还要改RouterLink，还可能要改其他地方 --> 命名路由
    name: "Blog",
    path: "/article",
    component: getAsyncComponent(() => import(/* webpackChunkName: "Blog" */ "@/views/Blog")),
    meta: {
      title: "文章",
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getAsyncComponent(() => import(/* webpackChunkName: "BlogDetail" */ "@/views/Blog/Detail.vue")),
    meta: {
      title: "文章详情",
    },
  },
  {
    name: "BlogCategory",
    path: "/article/cate/:categoryId",
    component: getAsyncComponent(() => import(/* webpackChunkName: "Blog" */ "@/views/Blog")),
    meta: {
      title: "文章",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: getAsyncComponent(() => import(/* webpackChunkName: "Message" */ "@/views/Message")),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: getAsyncComponent(() => import(/* webpackChunkName: "Project" */ "@/views/Project")),
    meta: {
      title: "项目&效果",
    },
  },
];
