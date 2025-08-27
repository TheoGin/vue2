import loadingSvg from '@/assets/loading.svg';
import style from './loading.module.less';

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
export default function(el, binding){
    // 这会在 `mounted` 和 `updated` 时都调用
    // console.log(binding); // {name: 'loading', rawName: 'v-loading', value: false, expression: 'isLoading', modifiers: {…}, …}

    const img =  getImg(el);
    if(binding.value && !img) {
        console.log(loadingSvg);
        
        el.appendChild(createImg());
    } else {
        img.remove();
    }
}

function createImg() {
    const img = document.createElement('img');
    img.src = loadingSvg;
    img.className = style.loading;
    img.dataset.loading='svg';
    return img;
}

function getImg(el) {
    return el.querySelector('img[loading="svg"]');
}