<template>
  <div class="empty-container">
    <Icon type="empty" />
    <span class="text">
      {{ text }}
    </span>
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
.empty-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  .icon-container {
    font-size: 72px;
    color: @gray;
  }
  .text {
    color: @lightWords;
    margin: 1em 0;
  }
}
</style>
