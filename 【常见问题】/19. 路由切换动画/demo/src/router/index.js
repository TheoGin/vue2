import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '@/views/Home.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      index: 0, // 用于判断方向
    },
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
    meta: {
      index: 1, // 用于判断方向
    },
  },
  {
    path: '/user',
    component: () => import('@/views/User.vue'),
    meta: {
      index: 2, // 用于判断方向
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const fromIndex = from.meta.index;
  const toIndex = to.meta.index;
  store.commit('switchTransition/changeDirection', fromIndex < toIndex ? 'right' : 'left');
  next();
});
export default router;
