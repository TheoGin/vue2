<template>
  <div class="home-container" ref="container">
    <h1>主页</h1>
    <button @click="handleClick">展示消息</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        type: "success",
        content: "注册成功",
        container: this.$refs.container,
        // duration: 1112000,
        duration: 2000,
        callback: function() {
          console.log("完成！！！");
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.home-container {
  width: 200px;
  height: 500px;
  margin: 50px auto;
  border: 1px solid;
}
</style>
