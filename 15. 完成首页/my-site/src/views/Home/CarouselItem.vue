<template>
  <div class="carousel-item-container">
    <!-- <img :src="item.bigImg" alt=""> -->
    <!-- 有图片组件！！！ -->
    <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" />

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
  data(){
    return {

      titleWidth: 0,
      descWidth: 0,
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    console.log(this.titleWidth,this.descWidth);
    this.showWords();
  },
  methods: {
    showWords() {
      // 标题
      this.$refs.title.style.width = 0;
      this.$refs.title.style.opacity = 0;
      this.$refs.title.style.transition = '1s';

      this.$refs.title.clientWidth; // reflow
      
      this.$refs.title.style.width = this.titleWidth + 'px';
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.transition = '1s';

      // 描述
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.carousel-item-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: @dark;
  color: #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.words {
  // .self-center();
  position: absolute;
  left: 30px;
  transform: translateY(-50%);
  letter-spacing: 3px;
  // width: 0;
  transition: 1s;
  // opacity: 0;
  white-space: nowrap;
  overflow: hidden;
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
