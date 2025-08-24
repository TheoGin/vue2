<template>
  <div class="carousel-item-container">
    <img :src="item.bigImg" alt="">
    <div class="words">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="desc">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
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
  color: #fff;
  .self-center();
  left: 30px;
  transform: translateY(-50%);

  .title {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .desc {
    font-size: 1.2em;
    color: #eaebec;
  }
}
</style>