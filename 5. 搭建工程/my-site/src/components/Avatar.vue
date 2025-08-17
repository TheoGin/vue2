<!-- default快速生成 -->
<template>
  <img
  class="avatar-container"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
    alt=""
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, // url属性必须是一个字符串，否则 [Vue warn]: Invalid prop: type check failed for prop "url". Expected String, got Array
      required: true, // 要求属性必填，否则 [Vue warn]:Missing required prop: "url"
    },
    /* width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    }, */
    // 宽高一样，改为只传一个
    size: {
      type: Number,
      // required: true,
    },
  },
};
</script>

<style scoped>
/* 带有作用域的样式 */
.avatar-container {
  border-radius: 50%;
  /* 避免一些图片的宽高比例很神奇，有的不是一比一的宽高比例，为了避免这个图片拉伸，所以可以加上object-fit: cover */
  object-fit: cover;
  /* 把组件放到块盒可能会出现白边 */
  display: block;
}
</style>
