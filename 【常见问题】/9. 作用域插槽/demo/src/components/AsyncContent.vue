<template>
  <div>
    <slot name="loading" v-if="loading">默认加载中……</slot>
    <!--通过 v-bind 将子组件的插槽数据绑定到父组件插槽的位置
      1、v-bind="error" 直接传递的就是 error
      2、v-bind:error="error" 这种传递方式会变成 v-bind="{ error }"
    -->
    <slot name="error" v-else-if="error" v-bind:error="error">默认错误信息……</slot>
    <!-- v-bind:content="content" 这种传递方式会变成 v-bind="{ content } -->
    <slot name="default" v-else :content="content">默认数据……{{ content }}</slot>
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
    console.log('this.$slots', this.$slots);
    console.log('this.$scopedSlots', this.$scopedSlots);
    try {
      this.content = await this.productsPromise;
      this.error = null;
    } catch (err) {
      this.error = err;
      this.content = null;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>
