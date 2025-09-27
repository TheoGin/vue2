<template>
  <div class="test-container">
    <Layout>
      <!-- <template #left>
        <div class="left">
          左边栏区域，宽度适应内容，溢出隐藏
        </div>
      </template> -->
      <template v-slot:default>
        <div class="main">
          主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏
        </div>
      </template>
      <template #right>
        <div class="right">
          右边栏区域，宽度适应内容，溢出隐藏
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 60%;
  height: 600px;
  border: 1px solid;
  margin: 0 auto;
  white-space: nowrap;
  
  .left {
    width: 200px;
    background-color: antiquewhite;

    // 在测试组件写
    height: 100%;
  }
  .main {
    background-color: #008c8c;

    // 在测试组件写
    width: 100%;
    height: 100%;
  }
  .right {
    width: 150px;
    height: 100%;
    background-color: lightblue;
  }
}
</style>
