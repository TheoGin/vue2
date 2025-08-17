<template>
  <!-- vue 会把两个class合并：
       <i class="iconfont iconzhuye"></i>
    -->
  <!-- <i class="iconfont" :class="classMap[type]"></i> -->
  <i class="iconfont" :class="fontClass"></i>
</template>

<script>
// 传递 iconzhuye 可读性差，也难记 ——> 用个对象做映射
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};

export default {
  props: {
    type: {
      type: String, // 两个type含义不一样
      required: true,
    },
  },
  //  classMap 是静态数据，没必要弄成响应式？
  /* data() {
    return {
      classMap: {
        home: "iconzhuye",
        success: "iconzhengque",
        error: "iconcuowu",
        close: "iconguanbi",
        warn: "iconjinggao",
        info: "iconxinxi",
        blog: "iconblog",
        code: "iconcode",
        about: "iconset_about_hov",
        weixin: "iconweixin",
        mail: "iconemail",
        github: "icongithub",
        qq: "iconsign_qq",
        arrowUp: "iconiconfonticonfonti2copy",
        arrowDown: "iconiconfonticonfonti2",
        empty: "iconempty",
        chat: "iconliuyan",
      },
    };
  }, */
  computed: {
    // 图标类样式
    fontClass() {
      console.log(classMap[this.type]);

      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
