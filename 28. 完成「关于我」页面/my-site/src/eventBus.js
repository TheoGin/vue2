// // { event1: [handler1, handler2], event2: [handler2] }
// const listeners = {};

// // 事件总线
// export default {
//   /**
//    * 监听某一个事件
//    * @param eventName 事件名称
//    * @param handler 处理函数
//    */
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       // 使用 Set 集合去重
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//     /**
//    * 取消监听
//    * @param eventName 事件名称
//    * @param handler 处理函数
//    */
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//     /**
//    * 触发事件
//    * @param eventName 事件名称
//    * @param args 参数
//    */
//   $emit(eventName, ...args) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   },
// };

import Vue from 'vue';

const app = new Vue({})

/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
 * 
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条scrollTop的值时触发
 * 参数：
 *  - 要设置滚动高度scrollTop的值
 */
Vue.prototype.$bus = app;

// export default new Vue({});

// 导出，这样在JS也可以用
export default app;

