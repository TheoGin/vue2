<template>
  <div>
    <h1>App组件</h1>
    <Icon type="warn" />
  </div>
</template>

<script>
import Icon from "./components/Icon.vue";

export default {
  name: "App",
  components: {
    Icon,
  },
};
</script>

<style scoped>
/* 父组件可以直接更改子组件最外层元素的样式，因为父组件的自定义属性也会给子组件最外层元素加上
<div data-v-7ba5bd90=""><h1 data-v-7ba5bd90="">App组件</h1>
  <i data-v-abc9f7ae="" data-v-7ba5bd90="" class="iconfont iconjinggao"></i>
  </div>
*/
.iconfont {
  font-size: 30px;
  color: red;
}
</style>
