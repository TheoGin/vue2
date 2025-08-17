<template>
  <div class="test-container">
    <ImgageLoader placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304" />
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
