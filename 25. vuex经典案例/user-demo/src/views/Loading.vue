<template>
  <h1>正在登录中...</h1>
</template>

<script>
export default {
  created() {
    // 组件销毁的时候还要取消监控
    this.unWatch = this.$watch(
      () => this.$store.getters["loginUser/status"],
      (status) => {
        /* if (status === "login") {      // vue-router.esm.js:2054 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/login?returnurl=%2Fnews"

        
          this.$router.push(this.$route.query.returnurl || "/").catch(() => {});
        } else if (status === "unlogin") {
          alert("该页面需要登录，你还没有登录，请先登录");
          this.$router.push({
            path: "/login",
            query: {
              returnurl: this.$route.query.returnurl,
            },
          });
        } */
        if (status !== "loading") {
          // vue-router.esm.js:2054 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/login?returnurl=%2Fnews"

          this.$router.push(this.$route.query.returnurl || "/").catch(() => {});
        }
      },
      {
        immediate: true,
      }
    );
  },
  destroyed() {
    // console.log('unWatch')
    this.unWatch();
  },
  watch: {
    // [Vue warn]: Failed watching path: "this.$store.getters[loginUser/status]" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.
    // ["this.$store.getters['loginUser/status']"]() {},
  },
};
</script>

<style></style>
