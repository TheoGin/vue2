<template>
  <div class="site-aside-container">
    <Avatar url="https://avatars.githubusercontent.com/u/98071271?v=4" />
    <Menu />
    <Contact />
    <div class="words">黑ICP备17001719号</div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
// 全局样式已在 main.js引入
// @import "~@/styles/global.less";
// @import "~@/styles/var.less";

.site-aside-container {
  width: 100%;
  height: 100vh;
  padding: 20px 0;

  .words {
    margin: 12px 0;
    font-size: 12px;
    text-align: center;
  }
}

.avatar-container {
  margin: 0 auto;
}
</style>
