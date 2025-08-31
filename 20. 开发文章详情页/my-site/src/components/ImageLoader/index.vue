<template>
  <div class="image-loader-container">
    <img
      class="placeholder"
      v-if="!transitionAndImgFinish"
      :src="placeholder"
      alt=""
    />
    <!-- 自带事件 load -->
    <img
      @load="handleLoad"
      :style="{
        opacity: opacityVal,
        transition: duration + 'ms'
      }"
      :src="src"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      imgLoadingFinish: false, //  原图是否加载完成
      transitionAndImgFinish: false, // 是否一切都尘埃落定了
    };
  },
  computed: {
    opacityVal() {
      return this.imgLoadingFinish ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.imgLoadingFinish = true;

      setTimeout(() => {
        this.transitionAndImgFinish = true;
        this.$emit('load');
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";

.image-loader-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  img {
    .self-fill();
    object-fit: cover;
    display: block;
  }
  .placeholder {
    // CSS3属性：虚化filter
    // filter: blur(20px);
    filter: blur(2vw);
  }
}
</style>
