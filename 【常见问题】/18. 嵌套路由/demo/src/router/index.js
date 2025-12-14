import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/user',
    component: () => import('@/views/user/Layout.vue'),
    // 嵌套路由配置
    children: [
      {
        path: '',
        component: () => import('@/views/user/index.vue'),
      },
      {
        path: 'profile', // 不要加 斜杠
        component: () => import('@/views/user/Profile.vue'),
      },
      {
        path: 'address',
        component: () => import('@/views/user/Address.vue'),
      },
      {
        path: 'security',
        component: () => import('@/views/user/Security.vue'),
      },
      {
        path: 'friends',
        component: () => import('@/views/user/Friends.vue'),
      },
    ],
  },
];

export default new VueRouter({
  routes,
});
