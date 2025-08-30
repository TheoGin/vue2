<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <!-- <img :src="item.bigImg" alt=""> -->
    <!-- 有图片组件！！！ -->
    <div class="carousel-img" ref="image" :style="imgPosition">
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
      outerContainerSize: null, // 外层容器的尺寸
      innerImgSize: null, // 里层图片的尺寸
      mouseX: 0, // 鼠标在容器中的横坐标
      mouseY: 0, // 鼠标在容器中的纵坐标
      // 可以不用响应式
      /* extraWidth: 0,
      extraHeight: 0, */
    };
  },
  computed: {
    imgPosition() {
      // 没有挂载完，没有outerContainerSize
      if (!this.outerContainerSize || !this.innerImgSize) {
        return;
      }

      const extraWidth = this.innerImgSize.width - this.outerContainerSize.width;
      const extraHeight =
        this.innerImgSize.height - this.outerContainerSize.height;
      // console.log(this.extraWidth, this.extraHeight);
      
      // extraWidth = outerContainerSize.width / mouseX * x
      const left =
        (-extraWidth / this.outerContainerSize.width) * this.mouseX;
      const top =
        (-extraHeight / this.outerContainerSize.height) * this.mouseY;
      /* return {
        left: left + "px",
        top: top + "px",
      }; */
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    imgCenterPosition() {
      return {
        x: this.outerContainerSize.width / 2,
        y: this.outerContainerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    // this.showWords();
    // 图片加载事件加载完再显示！！

    // 如果容器宽高是百分比，则会发生变化

    this.setSize();
    window.addEventListener("resize", this.setSize);

    // 图片初始位置
    this.mouseX = this.imgCenterPosition.x;
    this.mouseY = this.imgCenterPosition.y;
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
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
      this.$refs.desc.style.opacity = 1;
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth; // reflow
      // 过渡两秒；延迟一秒
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
      // this.$refs.desc.style.opacity = 1;
    },
    setSize() {
      this.outerContainerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerImgSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMousemove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      // this.mouseX = e.clientX - this.outerContainerSize.width;
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      // console.log(this.mouseX, this.mouseY);
    },
    handleMouseleave() {
      this.mouseX = this.imgCenterPosition.x;
      this.mouseY = this.imgCenterPosition.y;
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
  overflow: hidden;

  .carousel-img {
    position: absolute;
    width: 110%;
    height: 110%;

    // 测试
    // z-index: -1;
    transition: 0.3s;
  }
}

.words {
  // .self-center();
  position: absolute;
  left: 30px;
  transform: translateY(-50%);
  letter-spacing: 3px;
  // width: 0;

  // 一开始不显示
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
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
