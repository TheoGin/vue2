/**
 * 函数防抖
 * @param callbackFn 回调函数
 * @param duration 毫秒，默认100ms
 * @returns {(function(...[*]): void)|*}
 */
export default function(callbackFn, duration = 100) {
//   let timer;
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn(...args);
    }, duration);
  };
}
