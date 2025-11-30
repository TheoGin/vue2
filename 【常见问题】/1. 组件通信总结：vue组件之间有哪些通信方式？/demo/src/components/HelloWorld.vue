<template>
  <div>
    <h1>HelloWorld</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // 子组件可以通过inheritAttrs: false配置，禁止将attribute附着在子组件的根元素上，但不影响通过$attrs获取
  inheritAttrs: false,
  created() {
    console.log("this.$attrs", this.$attrs);
  },
};
</script>
