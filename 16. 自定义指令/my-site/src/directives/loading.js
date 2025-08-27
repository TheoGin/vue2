import loadingUrl from "@/assets/loading.svg";
import style from "./loading.module.less";

/* export default {
  binding() {
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  },
  inserted() {
    // 被绑定元素插入父节点时调用。
  },
  updated() {
    // 所在组件的 VNode 更新时调用
  },
}; */
// 如果这两个钩子函数实现的功能相同，可以直接把指令配置简化为一个单独的函数
export default function(el, binding) {
  // 这会在 `mounted` 和 `updated` 时都调用
  // console.log(binding); // {name: 'loading', rawName: 'v-loading', value: false, expression: 'isLoading', modifiers: {…}, …}

  const curImg = getLoadingImage(el);
  // 根据 binding.value 的值，决定创建或删除img元素
  if (binding.value) {
    if (!curImg) {
      el.appendChild(createLoadingImg());
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}

function createLoadingImg() {
  const img = document.createElement("img");
  img.src = loadingUrl;
  img.className = style.loading;
  img.dataset.role = "loading";
  return img;
}

// 得到el中loading效果的img元素
function getLoadingImage(el) {
//   return el.querySelector("img[role=loading]");
// 要加 data-
  return el.querySelector("img[data-role=loading]");
}
