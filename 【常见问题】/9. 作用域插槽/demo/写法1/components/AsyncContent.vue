<template>
  <div>
    <slot name="loading" v-if="loading">默认加载中……</slot>
    <!-- 错误写第二个，因为可能 content是 [] 空数组 -->
    <slot name="error" v-else-if="error" v-bind="error">默认错误信息……</slot>
    <slot name="default" v-else v-bind="content">默认数据……{{ content }}</slot>
  </div>
</template>

<script>
export default {
  props: ["productsPromise"],
  data() {
    return {
      loading: true,
      content: null,
      error: null,
    };
  },
  async created() {
    try {
      this.content = await this.productsPromise;
      this.error = null;
    } catch (err) {
      // this.error = err; // new Error("not found")：Error对象没法响应式 ——》换成普通对象
      this.error = { error: err, message: err.message };
      this.content = null;
    } finally {
      this.loading = false;
    }
  },
};
</script>