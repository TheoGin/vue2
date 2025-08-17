<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p class="text">
      {{ text }}
    </p>
  </div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";

.empty-container {
  text-align: center;
  color: @gray;

  // 很多地方都可能会用到居中 ——》抽离成 mixin
  .self-center();
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
}

.icon-container {
  font-size: 72px;
}
</style>
