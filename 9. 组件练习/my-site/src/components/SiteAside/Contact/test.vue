<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";

export default {
  components: {
    Contact,
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
