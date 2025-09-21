<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";

export default {
  components: {
    Menu,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.test-container {
  border: 1px solid;
  width: 400px;
  height: 400px;
  background-color: @dark;
  margin: 0 auto;
}
</style>
