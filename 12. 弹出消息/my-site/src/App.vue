<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <!-- <router-view></router-view> -->
        <RouterView></RouterView>
      </template>
      <!-- <template #right>
        <div class="right">右区域</div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style scoped lang="less">
@import '~@/styles/mixin.less';

.app-container {
  // App组件要撑满，并且用固定定位！！
  .self-fill(fixed);
  
  .aside {
    width: 250px;

    // 需要设置高
    height: 100%;
  }
}
</style>
