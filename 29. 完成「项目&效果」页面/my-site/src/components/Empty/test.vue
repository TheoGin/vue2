<template>
  <div class="test-container">
    <Empty />
    <!-- <Empty :text="123" /> -->
  </div>
</template>

<script>
import Empty from "./";

export default {
  components: {
    Empty,
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
