<template>
  <div class="carousel-item-container">
    <!-- <img :src="item.bigImg" alt=""> -->
    <!-- 有图片组件！！！ -->
    <div class="carousel-img">
      <ImageLoader
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>

    <div class="words title" ref="title">
      {{ carousel.title }}
    </div>
    <div class="words desc" ref="desc">
      {{ carousel.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  components: {
    ImageLoader,
  },
  /* props: {
    carousel: {
      type: Object,
      required: true,
    }
  } */
  // 不通用的组件，可以不用写类型，节省代码
  props: ["carousel"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    // this.showWords();
    // 图片加载事件加载完再显示！！
  },
  methods: {
    // 调用该方法，显示文字
    showWords() {
      // 标题
      this.$refs.title.style.width = 0;
      // this.$refs.title.style.opacity = 0;
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.transition = "1s";
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth; // reflow
      this.$refs.title.style.width = this.titleWidth + "px";
      // this.$refs.title.style.opacity = 1;
      this.$refs.title.style.transition = "1s";

      // 描述
      this.$refs.desc.style.width = 0;
      // this.$refs.title.style.opacity = 0;
      this.$refs.title.style.opacity = 1;
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth; // reflow
      // 过渡两秒；延迟一秒
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
      // this.$refs.desc.style.opacity = 1;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.carousel-item-container {
  position: relative;
  width: 100%;
  height: 100%;
  // background: @dark;
  color: #fff;

  .carousel-img {
    width: 100%;
    height: 100%;
  }
}

.words {
  // .self-center();
  position: absolute;
  left: 30px;
  transform: translateY(-50%);
  letter-spacing: 3px;
  // width: 0;
  // opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5),
    -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5),
    0 -1px 0 rgba(0, 0, 0, 0.5),
    ;
}
.title {
  color: #fff;
  top: calc(50% - 40px);
  font-size: 2em;
}

.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}
</style>
