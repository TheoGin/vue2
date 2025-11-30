<template>
  <div id="app">
    <HelloWorld
        style="color:red"
        class="hello"
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