<template>
  <h1>正在登录中...</h1>
</template>

<script>
export default {
  created() {
    this.$watch(
      () => this.$store.getters["loginUser/status"],
      (status) => {
        if (status === "login") {
          this.$router.push(this.$route.query.returnurl);
        } else if(status === "unlogin") {
            alert('该页面需要登录，你还没有登录，请先登录')
          this.$router.push({
            path: '/login',
            query: {
               returnurl: this.$route.query.returnurl
            }
          });
        }
      },
      {
        immediate: true,
      }
    );
  },
  watch: {
    // [Vue warn]: Failed watching path: "this.$store.getters[loginUser/status]" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.
    // ["this.$store.getters['loginUser/status']"]() {},
  },
}
</script>

<style>

</style>