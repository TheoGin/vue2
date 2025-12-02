<!--<template>
  &lt;!&ndash;<div id="app" a="1" b="2">
    <img
      alt="Vue logo"
      src="https://avatars.githubusercontent.com/u/98071271?v=4"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>&ndash;&gt;
</template>-->

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  template: `
    <div>
      <h1>title1</h1>
      <h2>title2</h2>
    </div>
  `,
  mounted() {
    console.log("App", this._vnode);
  },
  /*render(h) {
    return h("div", [
      h("h1", 'title1'),
      h("h2", 'title2'),
    ]);
  },*/
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
