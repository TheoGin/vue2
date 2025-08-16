const template = `<button @click="count++">当前点击了{{ count }}次</button>`;

// 组件本质是一个配置对象
export default {
  data() {
    return {
      count: 0,
    };
  },
  template,
};
