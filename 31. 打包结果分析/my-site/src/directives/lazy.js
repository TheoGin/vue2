import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
  // 不在视口范围内先暂时使用着默认图片
  img.dom.src = defaultGif;

  const rect = img.dom.getBoundingClientRect();
  // console.log(rect.height);
  const clientHeight = document.documentElement.clientHeight;
  const height = rect.height || 150;
  if (rect.top >= -height && rect.top <= clientHeight) {
    // 在视口范围内
    // console.log("在视口范围内", img.dom, rect.top, rect.height);
    /* const tempImg = new Image();
    tempImg.onload = () => {
      // 当真实图片加载完成之后
      // img.dom.src = tempImg.src;
      img.dom.src = img.src;
    };
    tempImg.src = img.src; */
    img.dom.src = img.src;

    // console.log('前 imgs', imgs);

    // 处理完需要过滤掉！！！
    imgs = imgs.filter(i => i !== img);

    // console.log('后 imgs', imgs);
  }
}

// setInterval(setImage, 1000);

// 希望，调用该函数，就可以设置那些合适的图片
function setImages() {
  imgs.forEach((img) => {
    // 处理该图片
    setImage(img);
  });
}

function handleScroll() {
  setImages();
}

// eventBus.$on('mainScroll', handleScroll)
eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  // 用 inserted，而不是 bind，因为created时候还没有这个元素，所以会导致 DOMRect {x: 0, y: 0, width: 0, height: 0, top: 0, …}
  inserted(el, binding) {
    const img = {
      dom: el,
      src: binding.value,
    };
    imgs.push(img);

    // 立即处理它
    setImage(img);
  },
  unbind(el) {
    // imgs = imgs.filter((img) => img !== el);
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
