<template>
  <div id="app">
    <!-- 除 msg 外，其他均为 attribute -->
    <HelloWorld
        data-a="1"
        data-b="2"
        msg="Welcome to Your Vue.js App"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
};
</script>