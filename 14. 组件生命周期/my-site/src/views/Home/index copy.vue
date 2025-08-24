<template>
  <div class="home-container" ref="container">
    <ul>
    </ul>
    <h1 ref="count">{{ count }}</h1>
    <button @click="count++">count +1</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      banners: [],
      count: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.banners); // beforeCreate undefined
  },
  async created() {
    console.log("created", this.banners); // created [__ob__: Observer]
  },
  beforeMount() {
    console.log("beforeMount", this.$refs.container); // beforeMount undefined
  },
  mounted() {
    console.log("mounted", this.$refs.container.outerHTML); // mounted <div data-v-1d9b105c="" data-v-7ba5bd90="" class="home-container" data-v-5f2c575d=""><ul data-v-1d9b105c=""></ul></div>
  },
  beforeUpdate() {
    // 拿到 真实dom 更新前的数据
    console.log(
      "beforeUpdate",
      "数据变动",
      this.$refs.count.innerText,
      this.count
    ); // beforeUpdate 数据变动 0 1
  },
  updated() {
    // 拿到 真实dom 更新后的数据
    console.log(
      "updated",
      "重新渲染完",
      this.$refs.count.innerText,
      this.count
    ); // updated 重新渲染完 1 1
  },
  // 切换菜单栏就会触发
  beforeDestroy() {
    console.log("beforeDestroy"); // beforeDestroy
  },
  destroyed() {
    console.log("destroyed"); // destroyed
  },
  methods: {},
};
</script>

<style scoped lang="less">
.home-container {
}
</style>
