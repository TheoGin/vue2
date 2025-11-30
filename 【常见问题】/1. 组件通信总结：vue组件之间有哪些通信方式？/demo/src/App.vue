<template>
  <div id="app">
    <!-- 点击没效果 -->
    <HelloWorld @click="handleClick" />
    <!-- 要用原生的要加上 .native -->
    <HelloWorld @click.native="handleClick" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  methods: {
    handleClick() {
      console.log("handleClick");
    },
  },
};
</script>
