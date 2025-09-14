<template>
  <div class="to-top-container" v-show="isShow" @click="handleClick">
    Top
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    // TypeError: this.$bus.off is not a function
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(domMainContainer) {
      if (!domMainContainer) {
        this.isShow = false;
        console.log("this.isShow", this.isShow);
        return;
      }
      const range = 500;
      if (domMainContainer.scrollTop > range) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    handleClick() {
      // 传一个domMainContainer过来，然后直接更改domMainContainer的scrollTop属性，但是不太好，会导致数据更改混乱 ——》用事件总线
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.to-top-container {
  position: fixed;
  right: 50px;
  bottom: 50px;
  background-color: @primary;
  width: 50px;
  height: 50px;
  z-index: 99;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
