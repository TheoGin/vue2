<template>
  <div class="not-found-container">
    <img src="../assets/404.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: "NotFound",
  created() {
    // this.$router.push({path: "/404"})
  }
};
</script>

<style scoped lang="less">
.not-found-container {
  width: 100%;
  height: 100%;
  background-color: #7dcdc0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>