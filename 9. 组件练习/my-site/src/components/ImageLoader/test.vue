<template>
  <div class="test-container">
    <!-- 自定义事件 load -->
    <ImgageLoader
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      :duration="1000"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImgageLoader from "./";

export default {
  components: {
    ImgageLoader,
  },
  data() {
    return {};
  },
  methods: {
    handleLoaded() {
      console.log("ImageLoader组件load事件触发，图片加载完成");
    },
  },
};
</script>

<style scoped lang="less">
.test-container {
  position: relative;
  border: 1px solid;
  width: 500px;
  height: 400px;
  margin: 0 auto;
}
</style>
