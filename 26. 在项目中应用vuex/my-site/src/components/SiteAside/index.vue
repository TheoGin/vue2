<template>
  <div class="site-aside-container" v-if="data">
    <Avatar :url="data.avatar" />
    <h1 class="title">{{ data.siteTitle }}</h1>
    <Menu />
    <Contact />
    <div class="footer">{{ data.icp }}</div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
// 全局样式已在 main.js引入
// @import "~@/styles/global.less";
@import "~@/styles/var.less";

.site-aside-container {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  overflow-x: hidden;
  // 不然内容会撑出去
  box-sizing: border-box;
  overflow-y: auto;
  background-color: @dark;

  .title {
    font-size: 1.2em;
    text-align: center;
    color: #fff;
  }

  .footer {
    margin: 12px 0;
    font-size: 12px;
    text-align: center;
  }
}
.avatar-container {
  margin: 0 auto;
}
</style>
