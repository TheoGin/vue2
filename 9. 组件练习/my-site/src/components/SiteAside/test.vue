<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";

export default {
  components: {
    SiteAside,
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
  width: 250px;
  height: 600px;
  margin: 0 auto;
}
</style>
